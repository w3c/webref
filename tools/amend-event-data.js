/**
 * Amend extracted event data to account for information that
 * cannot be reliably extracted by reffy
 * or need other web platform information to match our package goals
 *
 * node tools/amend-event-data.js [folder]
 * 
 * ... where:
 * - [folder] is the name of the folder that contains the data to parse
 * and update (default is "curated")
 */

const fs = require('fs').promises;
const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const loadJSON = require('./utils').loadJSON;
const expandCrawlResult = require('reffy').expandCrawlResult;

const trees = {
  dom: ["Window", "Document", /^.*Element$/, "Node"],
  idb: ["IDBDatabase", "IDBTransaction", "IDBRequest"],
  bt: ['Bluetooth', 'BluetoothDevice', 'BluetoothRemoteGATTService',
       'BluetoothRemoteGATTCharacteristic', 'BluetoothRemoteGATTDescriptor'],
  serial: ['Serial', 'SerialPort'],
  match: function(iface) {
    return Object.keys(this).find(t => 
      Array.isArray(this[t]) && this[t].find(i => typeof i === "string" ? i === iface : iface.match(i))
    );
  },
  getDepth: function(tree, iface) {
    return this[tree].findIndex(i =>typeof i === "string" ? i === iface : iface.match(i));
  }

};


const patches = {
  'IndexedDB-3': [
    {
      pattern: { type: "versionchange" },
      matched: 1,
      change: { interface: "IDBVersionChangeEvent" }
    },
    {
      pattern: { type: /^(blocked|upgradeneeded)$/},
      matched: 2,
      change: { interface: "IDBVersionChangeEvent", bubbles: false }
    },
    {
      add : {
	interface: "IDBVersionChangeEvent",
	bubbles: false,
	type: "success",
	targets: ["IDBOpenDBRequest"] ,
	src: { "href": "https://w3c.github.io/IndexedDB/#dom-idbfactory-deletedatabase" }
      }
    }
  ],
  'background-fetch': [
    {
      pattern: { type: /^backgroundfetch(success|fail)$/ },
      matched: 2,
      change: { interface: "BackgroundFetchUpdateUIEvent" }
    },
    {
      pattern: { type: "backgroundfetchabort" },
      matched: 1,
      change: { interface: "BackgroundFetchEvent" }
    }

  ],
  'battery-status': [
    {
      pattern: { type: /^(charging(time)?change|dischargingtimechange|levelchange)$/ },
      matched: 4,
      change: { interface: "Event" }
    }
  ],
  'compat': [
    {
      // https://compat.spec.whatwg.org/#windoworientation-interface says
      // that htmlbodyelement as a target is safari-only
      pattern: { type: 'orientationchange' },
      matched: 1,
      change: { targets: ['Window'] }
    }
  ],
  'cookie-store': [
    {
      pattern: { type: /^change$/ },
      matched: 1,
      change: { interface: "CookieChangeEvent" }
    }
  ],
  'css-nav-1': [
    {
      pattern: { interface: null },
      matched: 2,
      delete: true
    },
    {
      // may be fixed once https://github.com/w3c/csswg-drafts/issues/3380 gets fixed
      pattern: { type: /^nav(beforefocus|notarget)$/ },
      // fails because of https://github.com/w3c/csswg-drafts/pull/7443
      matched: 2,
      change: { targets: ['HTMLElement'] }
    }
  ],
  'css-scroll-snap-2': [
    // see also https://github.com/w3c/csswg-drafts/issues/7442
    {
      pattern: { type: /^snapChang(ed|ing)$/ },
      matched: 2,
      change: { targets: ['HTMLElement'] }
    }
  ],
  'html': [
    {
      pattern: { href: /dnd.html#event-dnd/ },
      matched: 7,
      change: { interface: 'DragEvent', bubbles: true }
    },
    {
      pattern: { type: "cancel"},
      matched: 1,
      change: { targets: ["HTMLDialogElement", "HTMLInputElement"] }
    },
    {
      pattern: { type: "close"},
      matched: 1,
      change: { targets: ["HTMLDialogElement"   ] }
    },
    {
      pattern: { type: "change", targets: "HTMLElement"},
      matched: 1,
      change: { targets: ["HTMLInputElement", "HTMLSelectElement" ]}
    },
    {
      pattern: { type: /^context(lost|restored)$/},
      matched: 2,
      change: { targets: ["HTMLCanvasElement", "OffscreenCanvas" ]}
    },
    {
      pattern: { type: /^(formdata|reset|submit)$/},
      matched: 3,
      change: { targets: ["HTMLFormElement" ] }
    },
    {
      pattern: { type: "invalid"},
      matched: 1,
      // Submittable elements https://html.spec.whatwg.org/multipage/forms.html#category-submit per https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#statically-validate-the-constraints
      change: { targets: ["HTMLButtonElement", "HTMLInputElement", "HTMLSelectElement", "HTMLTextAreaElement" ] }
    },
    {
      pattern: { type: "select"},
      matched: 1,
      change: { targets: ["HTMLInputElement", "HTMLTextAreaElement" ]}
    },
    {
      pattern: { type: "slotchange"},
      matched: 1,
      change: { targets: ["HTMLSlotElement" ]}
    },
    {
      pattern: { type: "toggle"},
      matched: 1,
      change: { targets: ["HTMLDetailsElement" ]}
    },
    {
      pattern: { targets: /^(HTMLMediaElement|HTMLSourceElement|TextTrack,HTMLTrackElement|HTMLTrackElement)/ },
      matched: 27,
      change: { bubbles: false}
    }
  ],
  'uievents': [
    // per https://github.com/w3c/uievents/issues/186
    { pattern: { type: /^(load|unload|abort|error|select)$/ },
      matched: 5,
      change: { interface: "Event" }
    }
  ]
};


function applyEventPatches(spec) {
  let errors = [];
  for (const patch of patches[spec.shortname]) {
    let matched = 0;
    const updatedEvents = [];
    if (patch.add) {
      spec.events.push(patch.add);
      continue;
    }
    for (let event of spec.events) {
      const matches = Object.keys(patch.pattern).every(prop => {
	if (patch.pattern[prop] === null) {
	  return event[prop] === null;
	} else if (typeof patch.pattern[prop] === "string") {
	  return event[prop]?.toString() === patch.pattern[prop];
	}
	// Assume RegExp
	return event[prop]?.toString()?.match(patch.pattern[prop]);
      });
      if (matches) {
	matched++;
	if (patch.delete) {
	  continue;
	} else if (patch.change) {
	  for (const target of Object.keys(patch.change)) {
	    event[target] = patch.change[target];
	  }
	}
      }
      updatedEvents.push(event);
    }
    if (matched !== patch.matched) {
      errors.push(`The following patch for the ${spec.shortname} spec changes ${matched} events, but ${patch.matched} was expected: ${JSON.stringify(patch, null, 2)}`);
      continue;
    }
    spec.events = updatedEvents;
  }
  if (!errors.length) {
    spec.needsSaving = true;
  }
  return errors;
}

function deepestInterfaceInTree(interfaces) {
  let deepestInTrees = {};
  let filteredInterfaces = [];
  for (let iface of interfaces) {
    const tree = trees.match(iface);
    if (!tree) { // Not in a tree, we keep it in
      filteredInterfaces.push(iface);
      continue;
    }
    const depth = trees.getDepth(tree, iface);
    const currentDeepest = deepestInTrees[tree];
    if (!currentDeepest || depth > trees.getDepth(tree, currentDeepest)) {
      deepestInTrees[tree] = iface;
    }
  }
  return filteredInterfaces.concat(Object.values(deepestInTrees));
}

function expandMixinTargets(event, mixins) {
  const expandedTargets = event.targets?.map(i => mixins[i] || i)?.flat();
  // This assumes a mixin matches more than one interface
  if (expandedTargets && expandedTargets.length !== event.targets?.length) {
    event.targets = expandedTargets;
    return true;
  }
  return false;
}

function setNotBubbling(event) {
  // if an event targets an interface in a tree
  // but the root of the tree wasn't detected as a target
  // we can assume bubbles is false
  // (ideally, we should check the existence of the event handler on the
  // root interface, but there is no easy way to get a consolidated IDL view
  // of the root at the moment)
  if (event.bubbles) return false;
  if (!event.targets) return false;
  const detected = {};
  for (let iface of event.targets) {
    const tree = trees.match(iface);
    if (!tree) continue;
    if (!detected[tree]) {
      detected[tree] = {root: false, nonroot: false};
    }
    if (trees[tree].indexOf(iface) === 0) {
      detected[tree].root = true;
    } else {
      detected[tree].nonroot = true;
    }
  }
  // if bubbles is set but none of the interfaces are in a tree
  // delete the meaningless property
  if (event.hasOwnProperty("bubbles") && !Object.values(detected).length) {
    delete event.bubbles;
    return true;
  }
  if (Object.values(detected).length && Object.values(detected).every(x => x.root === false) && Object.values(detected).some(x => x.nonroot === true)) {
    event.bubbles = false;
    return true;
  }
  return false;
}


function cleanTargetInTrees(event) {
  // When several targets are attached to an event that bubbles
  // keep only the "deepest" target
  if (event.bubbles && event.targets?.length > 1) {
    const filteredTargets = deepestInterfaceInTree(event.targets);
    if (filteredTargets.length !== event.targets.length) {
      event.targets = filteredTargets;
      return true;
    }
  }
  return false;
}


async function curateEvents(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  const index = await expandCrawlResult(rawIndex, folder, ['events', 'idlparsed']);

  // Collect list of mixin interfaces
  const mixins = {};
  index.results.forEach(s => {
    if (s.idlparsed && s.idlparsed.idlExtendedNames) {
      Object.keys(s.idlparsed.idlExtendedNames).forEach(n => {
        s.idlparsed.idlExtendedNames[n].forEach(f => {
	  if (f.type === "includes") {
	    if (!mixins[f.includes]) mixins[f.includes] = [];
	    mixins[f.includes].push(n);
	  }
	});
      });
    }
  });

  async function saveEvents(spec) {
    const events = Object.assign({
      spec: {
        title: spec.title,
        url: spec.crawled
      }
    }, {events: spec.events});
    const json = JSON.stringify(events, null, 2) + '\n';
    const pathname = path.join(folder, 'events', spec.shortname + '.json');
    await fs.writeFile(pathname, json);
  };

  let errors = [];
  for (const specShortname of Object.keys(patches)) {
    const spec = index.results.find(s => s.shortname === specShortname);
    if (!spec) {
      errors.push(`Could not find spec with shortname ${specShortname} for event patching`);
      continue;
    }
    if (!spec.events) {
      errors.push(`Spec with shortname ${specShortname} has no event to patch`);
      continue;
    }
    errors = errors.concat(applyEventPatches(spec));
  }
  for (const spec of index.results.filter(s => s.events)) {
    for (const event of spec.events) {
      if (expandMixinTargets(event, mixins)) {
	spec.needsSaving = true;
      }
      if (setNotBubbling(event)) {
	spec.needsSaving = true;
      }
      if (cleanTargetInTrees(event)) {
	spec.needsSaving = true;
      }
    }
  }

  for (const spec of index.results) {
    if (spec.needsSaving) {
      await saveEvents(spec);
    }
  }

  if (errors.length) {
    throw new Error("\n- " + errors.join("\n-"));
  }

}


/**************************************************
Export methods for use as module
**************************************************/
module.exports.curateEvents = curateEvents;

/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (require.main === module) {
  const folder = process.argv[2] ?? 'curated';

  curateEvents(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}

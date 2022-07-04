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

const patches = {
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
  'cookie-store': [
    {
      pattern: { type: /^change$/ },
      matched: 1,
      change: { interface: "CookieChangeEvent" }
    }
  ],
  'css-nav': [
    {
      // may be fixed once https://github.com/w3c/csswg-drafts/issues/3380 gets fixed
      pattern: { type: /^nav(beforefocus|notarget)$/ },
      // fails because of https://github.com/w3c/csswg-drafts/pull/7443
      matched: 2,
      change: { targets: ['HTMLElement'] }
    }
  ],
  'css-scroll-snap': [
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
      change: { interface: 'DragEvent' }
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
      pattern: { targets: /^(HTMLMediaElement|HTMLSourceElement|AudioTrackList,TextTrackList,VideoTrackList|TextTrack,HTMLTrackElement|HTMLTrackElement|TextTrackCue)/ },
      matched: 32,
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

async function applyEventPaches(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  const index = await expandCrawlResult(rawIndex, folder, ['events']);

  let errors = [];
  for (const specShortname of Object.keys(patches)) {
    let specErrors = [];
    const spec = index.results.find(s => s.series.shortname === specShortname);
    if (!spec) {
      specErrors.push(`Could not find spec with shortname ${specShortname} for event patching`);
      continue;
    }
    if (!spec.events) {
      specErrors.push(`Spec with shortname ${specShortname} has no event to patch`);
      continue;
    }
    for (const patch of patches[spec.series.shortname]) {
      let matched = 0;
      for (const event of spec.events) {
	const matches = Object.keys(patch.pattern).every(prop => event[prop]?.toString()?.match(patch.pattern[prop]));
	if (matches) {
	  matched++;
	  for (const target of Object.keys(patch.change)) {
	    event[target] = patch.change[target];
	  }
	}
      }
      if (matched !== patch.matched) {
	specErrors.push(`The following patch for the ${spec.series.shortname} spec changes ${matched} events, but ${patch.matched} was expected: ${JSON.stringify(patch, null, 2)}`);
	continue;
      }
    }
    if (!specErrors.length) {
      spec.needsSaving = true;
    } else {
      errors = errors.concat(specErrors);
    }
  }

  async function saveEvents(spec) {
    const events = Object.assign({
      spec: {
        title: spec.title,
        url: spec.crawled
      }
    }, {events: spec.events});
    const json = JSON.stringify(events, null, 2) + '\n';
    const pathname = path.join(folder, 'events', spec.series.shortname + '.json');
    await fs.writeFile(pathname, json);
  };

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
module.exports.applyEventPaches = applyEventPaches;

/**************************************************
Code run if the code is run as a stand-alone module
**************************************************/
if (require.main === module) {
  const folder = process.argv[2] ?? 'curated';

  applyEventPaches(folder).catch(e => {
    console.error(e);
    process.exit(1);
  });
}

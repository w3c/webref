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
const loadJSON = require('./utils').loadJSON;
const expandCrawlResult = require('reffy').expandCrawlResult;

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
      add: {
        interface: "IDBVersionChangeEvent",
        bubbles: false,
        type: "success",
        targets: ["IDBOpenDBRequest"] ,
        src: { "href": "https://w3c.github.io/IndexedDB/#dom-idbfactory-deletedatabase" }
      }
    }
  ],
  'audio-session': [
    {
      pattern: { type: 'statechange' },
      matched: 1,
      change: { interface: 'Event' }
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
  // Bubbles heuristic in Reffy is not smart enough to trap:
  // "bubbles and cancelable attributes set to false"
  // and incorrectly thinks occurence of "bubbles" means that the event bubbles.
  'captured-mouse-events': [
    {
      pattern: { type: 'capturedmousechange' },
      matched: 1,
      change: { bubbles: false }
    }
  ],
  // pending https://github.com/w3c/clipboard-apis/pull/181
  // see also https://github.com/w3c/clipboard-apis/issues/74
  'clipboard-apis': [
    {
      pattern: { type: /^(cut|clipboardchange|paste|copy)$/ },
      matched: 4,
      change: {
        interface: "ClipboardEvent",
        targets: ["GlobalEventHandlers"],
        bubbles: true
      }
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
  // pending https://github.com/w3c/csswg-drafts/pull/7466/files
  'cssom-view-1': [
    {
      pattern: { type: "change" },
      matched: 1,
      change: { interface: 'MediaQueryListEvent' }
    }
  ],
  // pending resolution of https://github.com/w3c/csswg-drafts/issues/7603
  // and https://github.com/w3c/csswg-drafts/pull/7740
  // (note event type and interface name may change to use a verb in the present
  // tense as part of the resolution)
  'css-contain-2': [
    {
      pattern: { type: 'contentvisibilityautostatechange' },
      matched: 1,
      change: { interface: 'ContentVisibilityAutoStateChangeEvent' }
    }
  ],
  'css-font-loading-3': [
    {
      pattern: { type: /^loading/ },
      matched: 3,
      change: { interface: 'FontFaceSetLoadEvent' }
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
    // deleting until we have clarity on the events https://github.com/w3c/csswg-drafts/issues/7442
    {
      pattern: { type: /^snapchang(ed|ing)$/ },
      matched: 2,
      delete: true
    }
  ],
  'fullscreen': [
    {
      pattern: { href: null },
      delete: true,
      matched: 4
    },
    {
      pattern: {  type: /^fullscreen(change|error)$/ },
      matched: 2,
      change: { bubbles: true, interface: "Event"}
    }
  ],
  'html': [
    // Pending resolution of https://github.com/whatwg/html/issues/682
    {
      pattern: { type: "input" },
      matched: 1,
      change: { interface: "InputEvent"}
    },
    // Matches "click" and "input" that extend events defined elsewhere
    {
      pattern: { targets: "Elements" },
      matched: 2,
      change: { targets: ["Element"] }
    },
    // Spec uses "fire a DND event" for these events:
    // https://html.spec.whatwg.org/multipage/dnd.html#fire-a-dnd-event
    {
      pattern: { href: /dnd.html#event-dnd/ },
      matched: 7,
      change: { interface: 'DragEvent', bubbles: true }
    },
    // The "HTMLElement" base interface receives most HTML events in theory,
    // but some of the events only fire on specific HTML elements in practice.
    // The following updates refine the target interfaces of these events.
    // (This is not a temporary fix: "HTMLElement" is the correct target
    // interface from a spec perspective, that's where the event handlers are
    // defined)
    // Also, the "cancel" event bubbles on input elements but not on other
    // target interfaces, so we need to duplicate the entry in the extract.
    {
      pattern: { type: "cancel"},
      matched: 1,
      change: { targets: ["HTMLInputElement"] }
    },
    {
      add: {
        type: "cancel",
        interface: "Event",
        bubbles: false,
        targets: ["CloseWatcher", "HTMLDialogElement"],
        href: "https://html.spec.whatwg.org/multipage/indices.html#event-cancel",
        src: {
          format: "summary table",
          href: "https://html.spec.whatwg.org/multipage/indices.html#event-cancel"
        }
      }
    },
    {
      pattern: { type: "close"},
      matched: 1,
      change: { targets: ["CloseWatcher", "HTMLDialogElement", "MessagePort"] }
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
      // Submittable elements https://html.spec.whatwg.org/multipage/forms.html#category-submit
      // per https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#statically-validate-the-constraints
      change: { targets: ["HTMLButtonElement", "HTMLInputElement", "HTMLSelectElement", "HTMLTextAreaElement" ] }
    },
    {
      pattern: { type: "pointercancel"},
      matched: 1,
      change: {
        // Extraction code finds events index but fails to detect that the event
        // bubbles (bubbling is implicit because spec uses "fire a pointer event")
        bubbles: true,
        // Extraction code needs help to parse "Elements and Text nodes"
        targets: ["GlobalEventHandlers", "Text"]
      }
    },
    {
      pattern: { type: "select"},
      matched: 1,
      change: { targets: ["HTMLInputElement", "HTMLTextAreaElement" ]}
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
  'notifications': [
    {
      pattern: { type: /^notification(click|close)$/ },
      matched: 2,
      change: { interface: "NotificationEvent" }
    }
  ],
  'orientation-event': [
    // Spec uses an indirect "fire an orientation event" algo to fire events:
    // https://w3c.github.io/deviceorientation/#fire-an-orientation-event
    {
      pattern: { type: /^deviceorientation/ },
      matched: 2,
      change: { interface: 'DeviceOrientationEvent' }
    }
  ],
  // TODO: to-be-idenfied bug in reffy, see https://github.com/w3c/webref/commit/348b90a37475563d924f4da8156c290ca27d77e2#diff-3877beb696dd5561959ba0c9b8c1485e9c78fbed53b1ec6723ae68621940e0c7
  'periodic-background-sync': [
    {
      pattern: { type: "periodicsync" },
      matched: 1,
      change: { interface: "PeriodicSyncEvent" }
    }
  ],
  'pointerlock-2': [
    {
      pattern: { type: /^pointerlock(change|error)$/ },
      matched: 2,
      change: { bubbles: false, interface: "Event" }
    }
  ],
  'presentation-api': [
    {
      pattern: { type: "message" },
      matched: 1,
      change: {
        interface: "MessageEvent",
        href: "https://html.spec.whatwg.org/multipage/indices.html#event-message",
        isExtension: true
      }
    }
  ],
  'savedata': [
    {
      pattern: { type: "change" },
      matched: 1,
      change: {
        href: "https://wicg.github.io/netinfo/#handling-changes-to-the-underlying-connection",
        isExtension: true
      }
    }
  ],
  // The spec asks user agents *not* to fire the event:
  // https://w3c.github.io/mediacapture-screen-share/#ref-for-dfn-devicechange-1
  'screen-capture': [
    {
      pattern: { type: "devicechange" },
      matched: 1,
      delete: true
    }
  ],
  'selection-api': [
    // pending https://github.com/w3c/selection-api/pull/148
    {
      pattern: { type: "selectstart" },
      matched: 1,
      change: { interface: "Event", bubbles: true }
    },
    {
      pattern: { type: "selectionchange" },
      matched: 1,
      change: { interface: "Event", bubbles: false }
    }
  ],
  'service-workers': [
    {
      pattern: { href: "https://wicg.github.io/BackgroundSync/spec/#sync" },
      matched: 1,
      change: { href: "https://wicg.github.io/background-sync/spec/#sync"}
    },
    // pending https://github.com/w3c/ServiceWorker/pull/1706
    {
      pattern: { type: "install" },
      matched: 1,
      change: { interface: "InstallEvent" }
    }
  ],
  'speech-api': [
    {
      pattern: {
        type: /^(audiostart|soundstart|speechstart|speechend|soundend|audioend|start|end)$/,
        targets: "SpeechRecognition" },
      matched: 8,
      change: { interface: 'Event' }
    },
    {
      pattern: { type: /^(result|nomatch)$/ },
      matched: 2,
      change: { interface: 'SpeechRecognitionEvent' }
    },
    {
      pattern: { type: "error", targets: "SpeechRecognition" },
      matched: 1,
      change: { interface: "SpeechRecognitionErrorEvent" }
    },
    {
      pattern: { type: "voiceschanged" },
      matched: 1,
      change: { interface: 'Event' }
    },
    {
      pattern: {
        type: /^(start|end|pause|resume|mark|boundary)$/,
        targets: "SpeechSynthesisUtterance"
      },
      matched: 6,
      change: { interface: "SpeechSynthesisEvent" }
    },
    {
      pattern: { type: "error", targets: "SpeechSynthesisUtterance" },
      matched: 1,
      change: { interface: "SpeechSynthesisErrorEvent" }
    }

  ],
  'svg-animations': [
    {
      pattern: { type: /.*/ },
      matched: 3,
      change: {
        interface: "TimeEvent",
        targets: ["SVGAnimationElement"],
        bubbles: false
      }
    }
  ],
  'uievents': [
    // per https://github.com/w3c/uievents/issues/186
    { pattern: { type: /^(load|unload|abort|error|select)$/ },
      matched: 5,
      change: { interface: "Event" }
    }
  ],
  'webaudio': [
    {
      pattern: { type: 'update' },
      matched: 1,
      change: { interface: 'AudioRenderCapacityEvent' }
    },
    {
      pattern: { type: 'ended' },
      matched: 1,
      change: { interface: 'Event' }
    },
    {
      pattern: { type: 'audioprocess' },
      matched: 1,
      change: { interface: 'AudioProcessingEvent' }
    }
  ],
  'webcodecs': [
    {
      pattern: { type: "dequeue" },
      matched: 4,
      change: { interface: 'Event' }
    }
  ],
  // see also https://github.com/KhronosGroup/WebGL/issues/3349
  'webgl1': [
    {
      add: {
        interface: "WebGLContextEvent",
        bubbles: false,
        type: "webglcontextlost",
        targets: ["HTMLCanvasElement", "OffscreenCanvas"] ,
        src: { "href": "https://registry.khronos.org/webgl/specs/latest/1.0/#CONTEXT_LOST" }
      }
    },
    {
      add: {
        interface: "WebGLContextEvent",
        bubbles: false,
        type: "webglcontextrestored",
        targets: ["HTMLCanvasElement", "OffscreenCanvas"] ,
        src: { "href": "https://registry.khronos.org/webgl/specs/latest/1.0/#CONTEXT_RESTORED" }
      }
    },
    {
      add: {
        interface: "WebGLContextEvent",
        bubbles: false,
        type: "webglcontextcreationerror",
        targets: ["HTMLCanvasElement", "OffscreenCanvas"] ,
        src: { "href": "https://registry.khronos.org/webgl/specs/latest/1.0/#CONTEXT_CREATION_ERROR" }
      }
    }
  ],
  // Pending https://github.com/WebAudio/web-midi-api/pull/234
  'webmidi': [
    {
      pattern: { targets: null, type: "statechange" },
      matched: 1,
      delete: true
    },
    {
      pattern: { type: "statechange"},
      matched: 1,
      change: {
        targets: ["MIDIPort", "MIDIAccess" ],
        interface: "MIDIConnectionEvent"
      }
    },
    {
      pattern: { type: "midimessage"},
      matched: 1,
      change: { interface: "MIDIMessageEvent" }
    }
  ],
  // pending https://github.com/immersive-web/layers/pull/285
  'webxrlayers-1': [
    {
      pattern: { type: "redraw" },
      matched: 1,
      change: { interface: "XRLayerEvent" }
    }
  ],
  'web-animations-1': [
    {
      pattern: { type: /^(finish|cancel|remove)$/ },
      matched: 3,
      change: { interface: "AnimationPlaybackEvent"}
    }
  ],
  'window-controls-overlay': [
    // Pending https://github.com/WICG/window-controls-overlay/pull/60
    {
      pattern: { type: "geometrychange" },
      matched: 1,
      delete: true
    },
    {
      pattern: { type: "ongeometrychange" },
      matched: 1,
      change: {
        type: "geometrychange",
        targets: ["WindowControlsOverlay"],
        interface: 'WindowControlsOverlayGeometryChangeEvent'
      }
    }
  ]
};


function applyEventPatches(spec) {
  let errors = [];
  console.log(`Applying events patches for ${spec.shortname}`);
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
          return event[prop] === null || event[prop] === undefined;
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
            if (patch.change[target] !== null) {
              event[target] = patch.change[target];
            }
            else {
              delete event[target];
            }
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

async function curateEvents(folder) {
  const rawIndex = await loadJSON(path.join(folder, 'index.json'));
  const index = JSON.parse(JSON.stringify(rawIndex));
  await expandCrawlResult(index, folder, ['events']);

  async function saveEvents(spec) {
    const pathname = path.join(folder, 'events', spec.shortname + '.json');
    if (spec.events.length) {
      const events = {
        spec: {
          title: spec.title,
          url: spec.crawled
        },
        events: spec.events
      };
      const json = JSON.stringify(events, null, 2) + '\n';
      await fs.writeFile(pathname, json);
    } else {
      await fs.unlink(pathname);
    }
  };

  let errors = [];
  for (const specShortname of Object.keys(patches)) {
    const spec = index.results.find(s => s.shortname === specShortname);
    if (!spec) {
      errors.push(`Could not find spec with shortname ${specShortname} for event patching`);
      continue;
    }
    if (!spec.events) {
      spec.events = [];
    }
    errors = errors.concat(applyEventPatches(spec));
  }

  for (const spec of index.results) {
    if (spec.needsSaving) {
      await saveEvents(spec);
      delete spec.needsSaving;
    }
  }

  // Update index file to add link to newly created events files
  // (and to delete link to deleted files although note prepare-curated.js
  // would automatically take care of that in any case)
  rawIndex.results.forEach(s => {
    if (s.events && index.results.find(ss => ss.url === s.url).events.length === 0) {
      delete s.events;
    }
    else if (!s.events && index.results.find(ss => ss.url === s.url).events?.length > 0) {
      s.events = `events/${s.shortname}.json`;
    }
  });
  const json = JSON.stringify(rawIndex, null, 2) + '\n';
  const pathname = path.join(folder, 'index.json');
  await fs.writeFile(pathname, json);

  if (errors.length) {
    throw new Error("\n- " + errors.join("\n- "));
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

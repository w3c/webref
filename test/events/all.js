/**
 * Test individual events extracts.
 *
 * The tests run against the curated view of the extracts.
 *
 * Note: the tests are not run against the `@webref/events` package view of
 * the data because that view is a strict subset of the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import events from '@webref/events';
import idl from '@webref/idl';
import { getInterfaceTreeInfo } from 'reffy';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated');

let allEvents = null;
const interfaces = new Set();
const usedEventInterfaces = new Set();

function report(msg, event) {
  return msg +
    ` for event type=${event.type}` +
    (event.interface ? ` interface=${event.interface}` : '') +
    (event.src?.href ? ` src=${event.src.href}` : '') +
    (event.href ? ` href=${event.href}` : '');
}

describe("the events data", async () => {
  // Create a set of well-known interfaces and an inheritance chain
  let allIdl;
  try {
    allIdl = await idl.parseAll({ folder: path.join(curatedFolder, 'idl') });
  } catch (err) {
      it('contains data that can be parsed with webidl2.js', () => {throw err;});
  }
  const parsedInterfaces = [];
  const mixins = new Set();
  for (const [shortname, ast] of Object.entries(allIdl)) {
    for (const dfn of ast) {
      if (dfn.name) {
        if (dfn.type === 'interface' && !dfn.partial) {
          interfaces.add(dfn.name);
          parsedInterfaces.push(dfn);
        }
        else if (dfn.type === 'interface mixin') {
          mixins.add(dfn.name);
        }
      }
    }
  }

  function inheritsFrom(iface, base) {
    while (iface) {
      if (iface === base) {
        return true;
      }
      iface = parsedInterfaces.find(i => i.name === iface)?.inheritance;
    }
    return false;
  }

  allEvents = await events.listAll({ folder: curatedFolder });
  for (const event of allEvents) {
    if (event.interface) {
      usedEventInterfaces.add(event.interface);
    }
  }

  describe('The curated view of events extracts', () => {
    it(`contains type attributes for all events`, () => {
      for (const event of allEvents) {
        assert(event.type, 'Found an event without a type attribute');
      }
    });

    const eventsPerType = {};
    for (const event of allEvents) {
      if (!event.type) {
        continue;
      }
      if (!eventsPerType[event.type]) {
        eventsPerType[event.type] = [];
      }
      eventsPerType[event.type].push(event);
    }
    for (const [type, list] of Object.entries(eventsPerType)) {
      it(`contains valid interfaces for events "${type}"`, () => {
        for (const event of list) {
          assert(event.interface, report('No event interface', event));
          assert(interfaces.has(event.interface) || mixins.has(event.interface), report('Unknown interface', event));
          assert(interfaces.has(event.interface), report('Event interface is a mixin', event));
        }
      });

      it(`contains valid target interfaces for events "${type}"`, () => {
        for (const event of list) {
          assert(event.targets?.[0], report('No target interfaces', event));
          for (const {target, bubbles} of event.targets) {
            assert(interfaces.has(target) || mixins.has(target), report(`Unknown target interface "${target}"`, event));
            assert(interfaces.has(target), report(`Target interface "${target}" is a mixin`, event));

            const ancestor = event.targets.find(({ target: t, bubbles: b }) =>
              t !== target && b === bubbles && inheritsFrom(target, t));
            assert(ancestor === undefined, report(`The "${target}" interface inherits from "${ancestor?.target}" which already appears in the list of target interfaces`, event));

            const treeInfo = getInterfaceTreeInfo(target, parsedInterfaces);
            if (treeInfo && treeInfo.depth > 0) {
              assert(bubbles !== undefined, report(`No "bubbles" attribute whereas target interface "${target}" is part of tree "${treeInfo.tree}" through interface "${treeInfo.interface}"`, event));
              const deeperTargets = event.targets
                .filter(({ target: t }) => t !== target)
                .filter(({ target: t, bubbles: b }) => {
                  const targetInfo = getInterfaceTreeInfo(t, parsedInterfaces);
                  return getInterfaceTreeInfo(t, parsedInterfaces)?.tree === treeInfo.tree &&
                    b && targetInfo.depth > treeInfo.depth;
                });
              assert.deepEqual(deeperTargets, [], report(`Deeper target interfaces found on top of "${target}" in bubbling tree "${treeInfo.tree}"`, event));
            }
            else {
              assert(bubbles === undefined, report(`A "bubbles" attribute is set whereas target interface "${target}" is not part of a tree`, event));
            }
          }
        }
      });
    }

    it(`does not contain any dangling extended event`, () => {
      for (const event of allEvents) {
        assert(!event.isExtension, report('Found a dangling extension event', event));
      }
    });

    it('references all the known *Event interfaces', () => {
      const eventInterfaces = [...interfaces].filter(iface => iface.match(/Event$/));
      assert.deepEqual(
        eventInterfaces.filter(iface => !usedEventInterfaces.has(iface)),
        [
          'SnapEvent', // pending https://github.com/w3c/csswg-drafts/issues/7442
          'CustomEvent' // not used by any spec
        ],
        "Event interfaces are defined in the platform but not referenced from extracted events"
      );
    });
  });
});

describe('The curated view of events extracts', () => {
  // Dummy test to make sure that "before" function runs and has a place
  // to report runtime errors
  it('contains events', () => {});
});

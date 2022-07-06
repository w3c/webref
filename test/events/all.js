/**
 * Test individual events extracts.
 * 
 * The tests run against the curated view of the extracts.
 * 
 * Note: the tests are not run against the `@webref/events` package view of
 * the data because that view is a strict subset of the curated view.
 */

const assert = require('assert').strict;
const path = require('path');
const events = require('@webref/events');
const idl = require('@webref/idl');
const { getTreeInfo } = require('../../tools/utils.js');

const curatedFolder = path.join(__dirname, '..', '..', 'curated');

describe('The curated view of events extracts', function () {
  before(async () => {
    // Create a set of well-known interfaces and an inheritance chain
    const allIdl = await idl.parseAll({ folder: path.join(curatedFolder, 'idl') });
    const parsedInterfaces = [];
    const interfaces = new Set();
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

    const allEvents = await events.listAll({ folder: path.join(curatedFolder, 'events') });
    for (const [shortname, data] of Object.entries(allEvents)) {
      describe(`The events extract for ${shortname} in the curated view`, () => {
        it(`contains type attributes for all events`, () => {
          for (const event of data.events) {
            assert(event.type, 'Found an event without a type attribute');
          }
        });

        for (const event of data.events) {
          if (!event.type) {
            continue;
          }

          it(`contains a valid interface for event "${event.type}"`, () => {
            assert(event.interface, 'No event interface');
            assert(interfaces.has(event.interface) || mixins.has(event.interface), `Unknown interface "${event.interface}"`);
            assert(interfaces.has(event.interface), `Event interface "${event.interface}" is a mixin`);
          });

          it(`contains valid target interfaces for event "${event.type} ${event.href}"`, () => {
            assert(event.targets?.[0], 'No target interfaces');
            event.targets.map(({target, bubbles}) => {
              assert(interfaces.has(target) || mixins.has(target), `Unknown target interface "${target}"`);
              assert(interfaces.has(target), `Target interface "${target}" is a mixin`);

              const treeInfo = getTreeInfo(target, parsedInterfaces);
              if (treeInfo && treeInfo.depth > 0) {
                assert(bubbles !== undefined, `No "bubbles" attribute whereas target interface "${target}" is part of tree "${treeInfo.tree}" through interface "${treeInfo.interface}"`);
              }
              else {
                assert(bubbles === undefined, `A "bubbles" attribute is set whereas target interface "${target}" is not part of a tree`);
              }
            });
          });
        }
      });
    }
  });

  it('contains valid JSON and expected properties', async function () {
    this.slow(5000);

    const all = await events.listAll({ folder: path.join(curatedFolder, 'events') });
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
      assert(desc.events);
      assert(desc.events.length > 0);
      assert(desc.events[0].hasOwnProperty('type'));
      assert(desc.events[0].hasOwnProperty('interface'));
    }
  });
});

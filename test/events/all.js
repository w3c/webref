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
const { getInterfaceTreeInfo } = require('reffy');

const curatedFolder = path.join(__dirname, '..', '..', 'curated');

const interfaces = new Set();
const usedEventInterfaces = new Set();

describe('The curated view of events extracts', function () {
  before(async () => {
    // Create a set of well-known interfaces and an inheritance chain
    const allIdl = await idl.parseAll({ folder: path.join(curatedFolder, 'idl') });
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

    const allEvents = await events.listAll({ folder: curatedFolder });
    it(`contains type attributes for all events`, () => {
      for (const event of allEvents) {
        assert(event.type, 'Found an event without a type attribute');
      }
    });

    for (const event of allEvents) {
      if (!event.type) {
        continue;
      }
      if (event.interface) {
        usedEventInterfaces.add(event.interface);
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

          const treeInfo = getInterfaceTreeInfo(target, parsedInterfaces);
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

  it('references all the known *Event interfaces', () => {
    const eventInterfaces = [...interfaces].filter(iface => iface.match(/Event$/));
    assert.deepEqual(
      eventInterfaces.filter(iface => !usedEventInterfaces.has(iface)),
      [
        'CustomEvent', // not used by any spec
        'PaymentRequestUpdateEvent' // pending https://github.com/w3c/payment-request/issues/991
      ],
      "Event interfaces are defined in the platform but not referenced from extracted events"
    );
  });
});

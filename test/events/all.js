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

const curatedFolder = path.join(__dirname, '..', '..', 'curated');

describe('The curated view of events extracts', function () {
  before(async () => {
    // Create a set of well-known interfaces
    const allIdl = await idl.parseAll({ folder: path.join(curatedFolder, 'idl') });
    const interfaces = new Set();
    for (const [shortname, ast] of Object.entries(allIdl)) {
      for (const dfn of ast) {
        if (dfn.name) {
          interfaces.add(dfn.name);
        }
      }
    }

    const allEvents = await events.listAll({ folder: path.join(curatedFolder, 'events') });
    for (const [shortname, data] of Object.entries(allEvents)) {
      describe(`The events extract for ${shortname} in the curated view`, () => {
        for (const event of data.events) {
          if (!event.type) {
            continue;
          }
          if (event.interface) {
            it(`links to a well-known interface for "${event.type}"`, () => {
              assert(interfaces.has(event.interface), `Unknown interface "${event.interface}"`);
            });
          }
          if (event.targets) {
            it(`links to well-known target interfaces for "${event.type}"`, () => {
              event.targets.map(target => assert(interfaces.has(target), `Unknown target interface "${target}"`));
            });
          }
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

const assert = require('assert').strict;

const elements = require('@webref/elements');
const idl = require('@webref/idl');

describe('@webref/elements module entries', () => {
  before(async () => {
    const allIdl = await idl.parseAll();

    // Create a set of well-known interfaces
    const interfaces = new Set();
    for (const [shortname, ast] of Object.entries(allIdl)) {
      for (const dfn of ast) {
        if (dfn.name) {
          interfaces.add(dfn.name);
        }
      }
    }

    const allElements = await elements.listAll();
    for (const [shortname, data] of Object.entries(allElements)) {
      describe(`The ${shortname} entry in @webref/elements`, () => {
        for (const el of data.elements) {
          if (!el.interface) {
            continue;
          }
          it(`links to a well-known interface for "${el.name}"`, () => {
            assert(interfaces.has(el.interface), `Unknown interface "${el.interface}"`);
          });
        }
      });
    }
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('can initialize data', () => {});
});

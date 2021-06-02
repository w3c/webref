const assert = require('assert').strict;

const elements = require('@webref/elements');
const idl = require('@webref/idl');

idl.parseAll().then(allIdl => {
  // Create a set of well-known interfaces
  const interfaces = new Set();
  for (const [shortname, ast] of Object.entries(allIdl)) {
    for (const dfn of ast) {
      if (dfn.name) {
        interfaces.add(dfn.name);
      }
    }
  }

  return elements.listAll().then(allElements => {
    for (const [shortname, data] of Object.entries(allElements)) {
      console.log(shortname);
      describe(`The ${shortname} entry in @webidl/elements`, () => {
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
}).then(run);

const assert = require('assert').strict;

const idl = require('@webref/idl');

describe('The @webref/idl module', () => {
  it('can list all IDL (listAll)', async () => {
    const files = await idl.listAll();
    assert(Object.keys(files).length > 0);
    for (const [shortname, file] of Object.entries(files)) {
      assert.equal(shortname, file.shortname);
      assert(/^[a-z0-9-_]+$/i.exec(shortname),
          `invalid shortname: ${shortname}`);
    }
  });

  it('can parse all IDL (parseAll)', async () => {
    const all = await idl.parseAll();
    assert(Object.keys(all).length > 0);
    for (const ast of Object.values(all)) {
      assert(Array.isArray(ast));
      assert(ast.length > 0);
    }
  });
});

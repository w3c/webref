const assert = require('assert');

const idl = require('@webref/idl');

describe('@webidl/idl module', () => {
  it('listAll', async () => {
    const files = await idl.listAll();
    assert(Object.keys(files).length > 0);
    for (const [shortname, file] of Object.entries(files)) {
      assert.strictEqual(shortname, file.shortname);
      assert(/^[a-z0-9-]+$/i.exec(shortname),
          `invalid shortname: ${shortname}`);
    }
  });

  it('parseAll', async () => {
    const all = await idl.parseAll();
    assert(Object.keys(all).length > 0);
    for (const ast of Object.values(all)) {
      assert(Array.isArray(ast));
      assert(ast.length > 0);
    }
  });
});

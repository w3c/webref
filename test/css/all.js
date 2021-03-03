const assert = require('assert').strict;

const css = require('@webref/css');

describe('@webidl/css module', () => {
  it('listAll', async () => {
    const files = await css.listAll();
    assert(Object.keys(files).length > 0);
    for (const [shortname, file] of Object.entries(files)) {
      assert.equal(shortname, file.shortname);
      assert(/^[a-z0-9-_]+$/i.exec(shortname),
          `invalid shortname: ${shortname}`);
    }
  });

  it('parseAll', async () => {
    const all = await css.parseAll();
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
    }
  });
});

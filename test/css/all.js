const assert = require('assert').strict;

const css = require('@webref/css');

describe('@webidl/css module', () => {
  it('listAll', async () => {
    const all = await css.listAll();
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
    }
  });
});

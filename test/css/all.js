const assert = require('assert').strict;

const css = require('@webref/css');

describe('The @webidl/css module', () => {
  it('can list all CSS properties (listAll)', async () => {
    const all = await css.listAll();
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
    }
  });
});

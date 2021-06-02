const assert = require('assert').strict;

const elements = require('@webref/elements');

describe('@webidl/elements module', () => {
  it('listAll', async () => {
    const all = await elements.listAll();
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
      assert(desc.elements);
      assert(desc.elements.length > 0);
      assert(desc.elements[0].hasOwnProperty('name'));
      assert(desc.elements[0].hasOwnProperty('interface'));
    }
  });
});

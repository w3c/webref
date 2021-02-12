const assert = require('assert');

const idl = require('@webref/idl');

describe('Web IDL consistency', () => {
  const dfns = new Map();
  const includes = [];
  const partials = [];

  it('unique definitions', async () => {
    const all = await idl.parseAll();

    for (const [spec, ast] of Object.entries(all)) {
      for (const dfn of ast) {
        if (dfn.partial) {
          partials.push(dfn);
        } else if (dfn.type === 'includes') {
          includes.push(dfn);
        } else {
          assert(dfn.name, `definition with no name in ${spec}`);
          assert(!dfns.has(dfn.name), `duplicate definition of ${dfn.type} ${dfn.name}`);
          dfns.set(dfn.name, dfn);
        }
      }
    }
  });

  it('inheritance', () => {
    for (const dfn of dfns.values()) {
      if (dfn.inheritance) {
        const parent = dfns.get(dfn.inheritance);
        assert(parent, `${dfn.name} inherits from missing type: ${dfn.inheritance}`);
        assert.strictEqual(dfn.type, parent.type, `${dfn.name} inherits from wrong type: ${parent.type}`);
      }
      switch (dfn.type) {
        case 'callback':
        case 'callback interface':
        case 'dictionary':
        case 'enum':
        case 'interface':
        case 'interface mixin':
          break;
        case 'namespace':
        case 'typedef':
          break;
        default:
          assert(false, `unknown definition type ${dfn.type}`)
      }
    }
  });

  it('includes', () => {
    for (const include of includes) {
      assert(include.target);
      const target = dfns.get(include.target);
      assert(target);
      assert.strictEqual(target.type, 'interface');
      assert(include.includes);
      const mixin = dfns.get(include.includes);
      assert(mixin);
      assert.strictEqual(mixin.type, 'interface mixin');
    }
  });
});

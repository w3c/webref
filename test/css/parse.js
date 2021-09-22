const assert = require('assert').strict;
const { definitionSyntax } = require('css-tree');

const css = require('@webref/css');

const cssValues = [
  { type: 'property', prop: 'properties', value: 'value' },
  { type: 'extended property', prop: 'properties', value: 'newValues' },
  { type: 'descriptor', prop: 'descriptors', value: 'value' },
  { type: 'value space', prop: 'valuespaces', value: 'value' }
];

// TEMP: constructs that are not yet supported by the parser (2021-03-10)
// See: https://github.com/w3c/reffy/issues/494#issuecomment-790713119
const tempIgnore = [
  { shortname: 'css-extensions', prop: 'valuespaces', name: '<custom-selector>' },
  { shortname: 'fill-stroke', prop: 'properties', name: 'stroke-dasharray' },
  { shortname: 'svg-animations', prop: 'valuespaces', name: '<control-point>' },
  { shortname: 'svg-markers', prop: 'properties', name: 'marker' },
  { shortname: 'svg-strokes', prop: 'valuespaces', name: '<dasharray>' }
];

describe('The @webref/css module entries', () => {
  before(async () => {
    const all = await css.listAll();

    for (const [shortname, data] of Object.entries(all)) {
      describe(`The ${shortname} entry in @webref/css`, () => {
        for (const { type, prop, value } of cssValues) {
          for (const [name, desc] of Object.entries(data[prop])) {
            if (!desc[value]) {
              continue;
            }
            if (tempIgnore.some(c => c.shortname === shortname &&
                c.prop === prop && c.name === name)) {
              continue;
            }
            it(`defines a valid ${type} "${name}"`, () => {
              assert.doesNotThrow(() => {
                const ast = definitionSyntax.parse(desc[value]);
                assert(ast.type);
              }, `Invalid definition value: ${desc[value]}`);
            });
          }
        }
      });
    }
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('can initialize data', () => {});
});

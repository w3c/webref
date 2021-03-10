const assert = require('assert').strict;
const { definitionSyntax } = require('css-tree');

const css = require('@webref/css');

const cssValues = [
  { type: 'property', prop: 'properties', value: 'value' },
  { type: 'extended property', prop: 'properties', value: 'newValues' },
  { type: 'descriptor', prop: 'descriptors', value: 'value' },
  { type: 'value space', prop: 'valuespaces', value: 'value' }
];

css.listAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    describe(`The ${shortname} entry in @webidl/css`, () => {
      for (const { type, prop, value } of cssValues) {
        if (!data[prop]) {
          continue;
        }
        for (const [name, desc] of Object.entries(data[prop])) {
          if (!desc[value]) {
            continue;
          }
          it(`defines a valid ${type} "${name}"`, () => {
            const ast = definitionSyntax.parse(desc[value]);
            assert(ast.type);
          });
        }
      }
    });
  }
}).then(run);

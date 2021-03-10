const assert = require('assert').strict;
const { definitionSyntax } = require('css-tree');

const css = require('@webref/css');

const cssValues = [
  { type: 'property', prop: 'properties', value: 'value' },
  { type: 'extended property', prop: 'properties', value: 'newValue' },
  { type: 'descriptor', prop: 'descriptors', value: 'value' },
  { type: 'value space', prop: 'valuespaces', value: 'value' }
];

css.parseAll().then(all => {
  for (const [shortname, data] of Object.entries(all)) {
    describe(`The ${shortname} entry in @webidl/css`, () => {
      for (const { type, prop, value } of cssValues) {
        if (!json[prop]) {
          continue;
        }
        for (const [name, desc] of Object.entries(json[prop])) {
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
});

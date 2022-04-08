/**
 * Test individual CSS extracts.
 *
 * The tests run against the curated view of the extracts.
 *
 * Note: the tests are not run against the `@webref/css` package view of the
 * data because that view is a strict subset of the curated view.
 */

const assert = require('assert').strict;
const path = require('path');
const css = require('@webref/css');
const index = require('../../curated/index.json');
const { definitionSyntax } = require('css-tree');

const curatedFolder = path.join(__dirname, '..', '..', 'curated', 'css');

// Expected content in CSS extracts
const cssValues = [
  { type: 'property', prop: 'properties', value: 'value' },
  { type: 'extended property', prop: 'properties', value: 'newValues' },
  { type: 'descriptor', prop: 'descriptors', value: 'value' },
  { type: 'value space', prop: 'valuespaces', value: 'value' }
];

// TEMP: constructs that are not yet supported by the parser
// See: https://github.com/w3c/reffy/issues/494#issuecomment-790713119
// (last validated on 2022-04-07)
const tempIgnore = [
  // Stacked combinator "+#?" not supported by css-tree
  { shortname: 'css-extensions', prop: 'valuespaces', name: '<custom-selector>' },

  // Stacked combinator "#?" not supported by css-tree
  { shortname: 'css-ui', prop: 'properties', name: 'cursor' },

  // Stacked combinator "+#" not supported by css-tree
  { shortname: 'fill-stroke', prop: 'properties', name: 'stroke-dasharray' },

  // Unescaped comma with multiplier ",*" not supported by css-tree
  { shortname: 'svg-animations', prop: 'valuespaces', name: '<control-point>' },

  // Stacked combinator "#*" not supported by css-tree
  { shortname: 'svg-strokes', prop: 'valuespaces', name: '<dasharray>' }
];

describe(`The curated view of CSS extracts`, () => {
  before(async () => {
    const all = await css.listAll({ folder: curatedFolder });
    const baseProperties = {};
    const extendedProperties = {};

    for (const [shortname, data] of Object.entries(all)) {
      describe(`The CSS extract for ${shortname} in the curated view`, () => {
        it('contains a link to the underlying spec', async () => {
          assert(data);
          assert(data.spec);
          assert(data.spec.title);
        });

        const spec = index.results.find(s => s.nightly.url === data.spec.url);
        for (const { type, prop, value } of cssValues) {
          for (const [name, desc] of Object.entries(data[prop])) {
            if (!desc[value]) {
              continue;
            }
            if ((type === 'property') && (spec.seriesComposition !== 'delta')) {
              if (!baseProperties[name]) {
                baseProperties[name] = [];
              }
              baseProperties[name].push({ spec: data.spec, dfn: desc });
            }
            else if ((type === 'extended property')) {
              if (!extendedProperties[name]) {
                extendedProperties[name] = [];
              }
              extendedProperties[name].push({ spec: data.spec, dfn: desc });
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

    describe(`Looking at CSS properties, the curated view`, () => {
      for (const [name, dfns] of Object.entries(baseProperties)) {
        it(`contains only one "${name}" property definition`, () => {
          assert.strictEqual(dfns.length, 1,
            `defined in ${dfns.map(d => d.spec.title).join(', ')} (${dfns.map(d => d.spec.url).join(', ')})`);
        });
      }
    });

    describe(`Looking at extended CSS properties, the curated view`, () => {
      for (const [name, dfns] of Object.entries(extendedProperties)) {
        it(`contains a base definition for the "${name}" property`, () => {
          assert(baseProperties[name], 'no base definition found');
        });
      }
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('contains valid JSON data', () => {});
});

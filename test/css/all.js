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
  { type: 'at-rule', prop: 'atrules', value: 'value' },
  { type: 'descriptor', prop: 'atrules', value: 'descriptors' },
  { type: 'value space', prop: 'valuespaces', value: 'value' }
];

// Valuespaces that are defined more than once...
const duplicatedValuespaces = [
  // Defined in CSS Shapes Module Level 1 and Motion Path Module Level 1
  // https://drafts.csswg.org/css-shapes/
  // https://drafts.fxtf.org/motion-1/
  '<path()>',

  // Defined in CSS Masking Module Level 1 and CSS Shapes Module Level 1
  // https://drafts.fxtf.org/css-masking-1/
  // https://drafts.csswg.org/css-shapes/
  '<rect()>'
];


describe(`The curated view of CSS extracts`, () => {
  before(async () => {
    const all = await css.listAll({ folder: curatedFolder });
    const baseProperties = {};
    const extendedProperties = {};
    const valuespaces = {};

    for (const [shortname, data] of Object.entries(all)) {
      describe(`The CSS extract for ${shortname} in the curated view`, () => {
        it('contains a link to the underlying spec', async () => {
          assert(data);
          assert(data.spec);
          assert(data.spec.title);
        });

        const spec = index.results.find(s => s.nightly.url === data.spec.url);
        for (const { type, prop, value } of cssValues) {
          for (const [name, desc] of Object.entries(data[prop] || {})) {
            if ((type === 'property') && (spec.seriesComposition !== 'delta') && !desc.newValues) {
              if (!baseProperties[name]) {
                baseProperties[name] = [];
              }
              baseProperties[name].push({ spec: data.spec, dfn: desc });
            }
            else if ((type === 'extended property') && desc[value]) {
              if (!extendedProperties[name]) {
                extendedProperties[name] = [];
              }
              extendedProperties[name].push({ spec: data.spec, dfn: desc });
            }
            else if ((type === 'value space') && (spec.seriesComposition !== 'delta')) {
              if (!valuespaces[name]) {
                valuespaces[name] = [];
              }
              valuespaces[name].push({ spec: data.spec, dfn: desc });
            }
            if (!desc[value]) {
              continue;
            }
            if (type === 'descriptor') {
              for (const dfn of desc[value]) {
                it(`defines a valid ${type} "${dfn.name}" for at-rule "${name}"`, () => {
                  assert.strictEqual(dfn.for, name);
                  assert.doesNotThrow(() => {
                    const ast = definitionSyntax.parse(dfn.value);
                    assert(ast.type);
                  }, `Invalid definition value: ${dfn.value}`);
                });
              }
            }
            else {
              it(`defines a valid ${type} "${name}"`, () => {
                assert.doesNotThrow(() => {
                  const ast = definitionSyntax.parse(desc[value]);
                  assert(ast.type);
                }, `Invalid definition value: ${desc[value]}`);
              });
            };
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

    describe(`Looking at CSS valuespaces, the curated view`, () => {
      for (const [name, dfns] of Object.entries(valuespaces)) {
        if (duplicatedValuespaces.includes(name)) {
          it(`contains more than one "${name}" valuespace definitions`, () => {
            assert(dfns.length >= 2);
          });
        }
        else {
          it(`contains only one "${name}" valuespace definition`, () => {
            assert.strictEqual(dfns.length, 1,
              `defined in ${dfns.map(d => d.spec.title).join(', ')} (${dfns.map(d => d.spec.url).join(', ')})`);
          });
        }
      }
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('contains valid JSON data', () => {});
});

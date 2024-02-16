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
  { type: 'selector', prop: 'selectors', value: 'value' },
  { type: 'value space', prop: 'values', value: 'value' }
];

describe(`The curated view of CSS extracts`, () => {
  before(async () => {
    const all = await css.listAll({ folder: curatedFolder });
    const baseProperties = {};
    const extendedProperties = {};
    const selectors = {};
    const valuespaces = {};

    for (const [shortname, data] of Object.entries(all)) {
      describe(`The CSS extract for ${shortname} in the curated view`, () => {
        it('contains a link to the underlying spec', async () => {
          assert(data);
          assert(data.spec);
          assert(data.spec.title);
        });

        const spec = index.results.find(s => s.nightly?.url === data.spec.url);
        for (const { type, prop, value } of cssValues) {
          for (const desc of data[prop]) {
            const name = desc.name;
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
            else if ((type === 'selector') && (spec.seriesComposition !== 'delta')) {
              if (!selectors[name]) {
                selectors[name] = [];
              }
              selectors[name].push({ spec: data.spec, dfn: desc });
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

            // All CSS values should link back to the spec, except:
            // - properties that extend a base property
            // - at-rulesdefined elsewhere (and present only because the spec
            // defines new descriptors for them)
            // - properties in delta specs that completely override the base
            // definition - currently enforced more restrictively as
            // "the 'contain' property in css-contain-3", to better track such
            // occurrences that should remain an exception to the exception rule!
            if (!desc.newValues &&
                (prop !== 'atrules' || desc.value || desc.prose) &&
                !(prop === 'properties' && name === 'contain' && spec.shortname === 'css-contain-3')) {
              it(`has a link back to the spec for ${type} "${name}"`, () => {
                assert(desc.href);
                assert(desc.href.includes('#'));
              });
            }

            if (desc.values) {
              for (const value of desc.values) {
                if (!value.value) {
                  continue;
                }
                it(`defines a valid value "${value.name}" for ${type} "${name}"`, () => {
                  assert.doesNotThrow(() => {
                    const ast = definitionSyntax.parse(value.value);
                    assert(ast.type);
                  }, `Invalid definition value: ${value.value}`);
                });

                it(`has a link back to the spec for value "${value.name}" for ${type} "${name}"`, () => {
                  assert(value.href);
                  assert(value.href.includes('#'));
                });
              }
            }
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

    describe(`Looking at CSS selectors, the curated view`, () => {
      for (const [name, dfns] of Object.entries(selectors)) {
        it(`contains only one "${name}" selector definition`, () => {
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
        it(`contains only one "${name}" valuespace definition`, () => {
          assert.strictEqual(dfns.length, 1,
            `defined in ${dfns.map(d => d.spec.title).join(', ')} (${dfns.map(d => d.spec.url).join(', ')})`);
        });
      }
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('contains valid JSON data', () => {});
});

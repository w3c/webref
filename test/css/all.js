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


// Valuespaces that are defined more than once...
const duplicatedValuespaces = [
  // Defined in CSS Grid Layout Module Level 2 and CSS Box Sizing Module Level 3
  // https://drafts.csswg.org/css-grid-2/
  // https://drafts.csswg.org/css-sizing-3/
  '<fit-content()>',

  // Defined in CSS Images Module Level 3, CSS Positioned Layout Module Level 3
  // and CSS Text Module Level 3 (and CSS Values but in prose so not extracted)
  // https://drafts.csswg.org/css-images-3/
  // https://drafts.csswg.org/css-position/
  // https://drafts.csswg.org/css-text-3/
  '<length>',

  // Defined in CSS Shapes Module Level 1 and Motion Path Module Level 1
  // https://drafts.csswg.org/css-shapes/
  // https://drafts.fxtf.org/motion-1/
  '<path()>',

  // Defined in CSS Positioned Layout Module Level 3,
  // CSS Mobile Text Size Adjustment Module Level 1 and CSS Text Module Level 3
  // (and CSS Values but in prose so not extracted)
  // https://drafts.csswg.org/css-position/
  // https://drafts.csswg.org/css-size-adjust-1/
  // https://drafts.csswg.org/css-text-3/
  '<percentage>',

  // Defined in CSS Masking Module Level 1 and CSS Shapes Module Level 1
  // https://drafts.fxtf.org/css-masking-1/
  // https://drafts.csswg.org/css-shapes/
  '<rect()>',

  // Defined in CSS Masking Module Level 1, CSS Values and Units Module Level 4
  // and Filter Effects Module Level 1
  // https://drafts.fxtf.org/css-masking-1/
  // https://drafts.csswg.org/css-values-4/
  // https://drafts.fxtf.org/filter-effects-1/
  '<url>'
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
          for (const [name, desc] of Object.entries(data[prop])) {
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

    describe(`Looking at CSS valuespaces, the curated view`, () => {
      for (const [name, dfns] of Object.entries(valuespaces)) {
        if (duplicatedValuespaces.includes(name)) {
          it(`contains more than "${name}" valuespace definitions`, () => {
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

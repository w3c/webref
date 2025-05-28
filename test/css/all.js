/**
 * Test individual CSS extracts.
 *
 * The tests run against the curated view of the extracts.
 *
 * Note: the tests are not run against the `@webref/css` package view of the
 * data because that view is a strict subset of the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import css from '@webref/css';
import index from '../../curated/index.json' with { type: 'json' };
import { definitionSyntax } from 'css-tree';
import { study } from 'strudy';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated', 'css');

// Expected content in CSS extracts
const cssValues = [
  { type: 'property', prop: 'properties', value: 'value' },
  { type: 'extended property', prop: 'properties', value: 'newValues' },
  { type: 'at-rule', prop: 'atrules', value: 'value' },
  { type: 'descriptor', prop: 'atrules', value: 'descriptors' },
  { type: 'selector', prop: 'selectors', value: 'value' },
  { type: 'value space', prop: 'values', value: 'value' }
];

// CSS anomalies that are not currently enforced
const ignorableAnomalies = [
  // Some of the anomalies reported are (at least temporarily) false positives,
  // e.g., when the unscoped dfn is in a spec that has not yet been published
  // to /TR. Ignoring for now.
  'cssScoped'
];

function writeAnomalies(report) {
  return 'CSS anomalies found:\n' +
    report.map(anomaly => anomaly.content).join('\n');
}

describe(`The curated view of CSS extracts`, async () => {
  let all;
  try {
    all = await css.listAll({ folder: curatedFolder });
  } catch (err) {
    it('contains valid JSON data', () => {throw err;});
  }

  it('passes Strudy\'s scrutiny', async function () {
    const crawl = [];
    for (const [shortname, css] of Object.entries(all)) {
      const spec = index.results.find(s =>
        s.shortname === shortname ||
        s.series.shortname === shortname);
      crawl.push({
        shortname,
        series: spec.series,
        title: shortname,
        crawled: '',
        css
      });
    }
    const studyOptions = { what: ['css'], structure: 'flat' };
    const report = await study(crawl, studyOptions);
    const results = report.results
      .filter(anomaly => !ignorableAnomalies.includes(anomaly.name));
    assert.equal(results.length, 0, writeAnomalies(results));
  });

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
            }
          }
        }
      }
    });
  }
});

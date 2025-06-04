/**
 * Test the consolidated css.json file in the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import consolidated from '../../curated/css.json' with { type: 'json' };
import { definitionSyntax } from 'css-tree';

// Expected categories in the consolidated file
const categories = {
  atrules: { singular: 'at-rule', plural: 'at-rules' },
  functions: { singular: 'function', plural: 'functions' },
  properties: { singular: 'property', plural: 'properties' },
  selectors: { singular: 'selector', plural: 'selectors' },
  types: { singular: 'type', plural: 'types' }
};

describe(`The consolidated CSS file`, async () => {
  for (const [category, { singular, plural }] of Object.entries(categories)) {
    const list = consolidated[category];

    it(`contains ${plural}`, () => {
      assert(list);
      assert(list.length > 0);
    });

    it(`does not contain duplicated ${plural}`, () => {
      const keys = list.map(entry => entry.name +
        (entry.for ? ` for ${entry.for}` : ''));
      const duplicates = keys.filter((key, idx) =>
        keys.findIndex(k => k === key) !== idx);
      assert.deepEqual(duplicates, []);
    });

    it(`contains valid ${singular} syntaxes`, () => {
      const invalid = list
        .filter(entry => entry.value)
        .filter(entry => {
          const ast = definitionSyntax.parse(entry.value);
          return !ast.type;
        });
      assert.deepEqual(invalid, []);
    });
  }
});

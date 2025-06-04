/**
 * Test the consolidated css.json file in the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import consolidated from '../../curated/css.json' with { type: 'json' };
import { definitionSyntax } from 'css-tree';

// Expected categories in the consolidated file
const categories = {
  atrules: 'at-rule',
  functions: 'function',
  properties: 'property',
  selectors: 'selector',
  types: 'type'
};

// Quick and dirty function to pluralize category labels
function pluralize(word) {
  if (word === 'property') {
    return 'properties';
  }
  else {
    return word + 's';
  }
}

describe(`The consolidated CSS file`, async () => {
  for (const [category, label] of Object.entries(categories)) {
    const list = consolidated[category];

    it(`contains ${pluralize(label)}`, () => {
      assert(list);
      assert(list.length > 0);
    });

    it(`does not contain duplicated ${pluralize(label)}`, () => {
      const keys = list.map(entry => entry.name +
        (entry.for ? ` for ${entry.for}` : ''));
      const duplicates = keys.filter((key, idx) =>
        keys.findIndex(k => k === key) !== idx);
      assert.deepEqual(duplicates, []);
    });

    it(`contains valid ${label} syntaxes`, () => {
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

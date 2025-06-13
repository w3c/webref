/**
 * Test the consolidated css.json file in the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import css from '@webref/css';
import { definitionSyntax } from 'css-tree';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated');


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
  // Create a set of well-known interfaces and an inheritance chain
  let consolidated;
  try {
    consolidated = await css.listAll({ folder: curatedFolder });
  }
  catch (err) {
      it('contains valid JSON', () => { throw err; });
  }

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

  it('can be indexed', async () => {
    const indexed = await css.index({ folder: curatedFolder });
    for (const [category, label] of Object.entries(categories)) {
      assert(indexed[category], `No ${pluralize(label)} in index`);
      assert.equal(
        Object.keys(indexed[category]).length,
        consolidated[category].length,
        `Not the right amount of ${pluralize(label)} in index`);
    }

    assert(indexed.atrules['@import'], `No flex property in index`);
    assert(indexed.functions['abs()'], `No abs() function in index`);
    assert(indexed.properties['flex'], `No flex property in index`);
    assert(indexed.selectors[':first-child'], `No :first-child selector in index`);
    assert(indexed.types['string'], `No string type in index`);
  });
});

/**
 * Test individual elements extracts.
 * 
 * The tests run against the curated view of the extracts.
 * 
 * Note: the tests are not run against the `@webref/elements` package view of
 * the data because that view is a strict subset of the curated view.
 */

import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import elements from '@webref/elements';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated', 'elements');

describe('The curated view of elements extracts', function () {
  it('contains valid JSON and expected properties', async function () {
    this.slow(5000);

    const all = await elements.listAll({ folder: curatedFolder });
    assert(Object.keys(all).length > 0);
    for (const desc of Object.values(all)) {
      assert(desc);
      assert(desc.spec);
      assert(desc.spec.title);
      assert(desc.elements);
      assert(desc.elements.length > 0);
      assert(desc.elements[0].hasOwnProperty('name'));
    }
  });
});

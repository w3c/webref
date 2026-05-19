/**
 * Test individual dfns and headings extracts against JSON schemas.
 * 
 * The tests run against the raw view of the extracts.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSchemaValidationFunction } from 'reffy';
import { loadJSON } from '../../tools/utils.js';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const rootFolder = path.join(scriptPath, '..', '..');
for (const version of ['ed', 'tr']) {
  for (const type of ['dfns', 'headings']) {
    const validate = await getSchemaValidationFunction(type);
    const folder = path.join(version, type);
    describe(`The ${folder} folder`, function () {
      const files = fs.readdirSync(path.join(rootFolder, folder));
      for (const file of files) {
        if (file.endsWith('.json')) {
          it(`contains valid ${type} data in ${file}`, async () => {
            const data = await loadJSON(path.join(folder, file));
            const errors = validate(data);
            assert.strictEqual(errors, null, JSON.stringify(errors, null, 2));
          });
        }
      }
    });
  }
}

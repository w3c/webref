/**
 * Test individual elements extracts against JSON schemas.
 * 
 * The tests run against the curated view of the extracts.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSchemaValidationFunction } from 'reffy';
import { loadJSON } from '../tools/utils.js';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', 'curated');
const files = fs.readdirSync(curatedFolder);
for (const file of files) {
  const validate = await getSchemaValidationFunction(file);
  if (file.endsWith('.json')) {
    describe(`The ${file} file`, function () {
      it('contains valid data', async function () {
        const data = await loadJSON(path.join(curatedFolder, file));
        const errors = validate(data);
        assert.strictEqual(errors, null, JSON.stringify(errors, null, 2));
      });
    });
  }
  else {
    describe(`The ${file} folder`, function () {
      const extractType = file;
      const folder = path.join(curatedFolder, extractType);
      const files = fs.readdirSync(folder);
      for (const file of files) {
        if (file.endsWith('.json')) {
          it(`contains valid ${extractType} data in ${file}`, async () => {
            const data = await loadJSON(path.join(folder, file));
            const errors = validate(data);
            assert.strictEqual(errors, null, JSON.stringify(errors, null, 2));
          });
        }
      }
    });
  }
}

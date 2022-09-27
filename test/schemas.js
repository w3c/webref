/**
 * Test individual elements extracts against JSON schemas.
 * 
 * The tests run against the curated view of the extracts.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert').strict;
const { getSchemaValidationFunction } = require('reffy');

const curatedFolder = path.join(__dirname, '..', 'curated');
const files = fs.readdirSync(curatedFolder);
for (const file of files) {
  const validate = getSchemaValidationFunction(file);
  if (file.endsWith('.json')) {
    describe(`The ${file} file`, function () {
      it('contains valid data', function () {
        const data = require(path.join(curatedFolder, file));
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
          it(`contains valid ${extractType} data in ${file}`, () => {
            const data = require(path.join(folder, file));
            const errors = validate(data);
            assert.strictEqual(errors, null, JSON.stringify(errors, null, 2));
          });
        }
      }
    });
  }
}

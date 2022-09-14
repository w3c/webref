/**
 * Test individual elements extracts.
 * 
 * The tests run against the curated view of the extracts.
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const assert = require('assert').strict;
const commonSchema = require('../schemas/common.json');

const schemaFiles = fs.readdirSync(path.join(__dirname, '..', 'schemas'));
for (const schemaFile of schemaFiles) {
  if (schemaFile.endsWith('.json')) {
    const schema = require(path.join('..', 'schemas', schemaFile));
    const ajv = new Ajv();
    addFormats(ajv);

    if (schemaFile.startsWith('extract-')) {
      const dataFolder = schemaFile.replace(/^extract-(.*)\.json$/, '$1');

      describe(`The ${dataFolder} folder`, function () {
        it('is linked to a valid JSON schema', () => {
          const isSchemaValid = ajv.validateSchema(schema);
          assert.ok(isSchemaValid);
        });

        describe(`The ${dataFolder} folder`, function () {
          const folder = path.join(__dirname, '..', 'curated', dataFolder);
          const files = fs.readdirSync(folder);
          const validate = ajv.addSchema(commonSchema).compile(schema);

          for (const file of files) {
            if (file.endsWith('.json')) {
              it(`has valid data in ${file}`, () => {
                const data = require(path.join(folder, file));
                const isValid = validate(data, { format: 'full' });
                assert.strictEqual(validate.errors, null);
                assert.ok(isValid);
              });
            }
          }
        });
      });
    }

    else if (fs.existsSync(path.join(__dirname, '..', 'curated', schemaFile))) {
      describe(`The ${schemaFile} file`, function () {
        it('is linked to a valid JSON schema', () => {
          const isSchemaValid = ajv.validateSchema(schema);
          assert.ok(isSchemaValid);
        });

        it('has valid data', () => {
          const validate = ajv.addSchema(commonSchema).compile(schema);
          const data = require(path.join('..', 'curated', schemaFile));
          const isValid = validate(data, { format: 'full' });
          assert.strictEqual(validate.errors, null);
          assert.ok(isValid);
        });
      });
    }
  }
}

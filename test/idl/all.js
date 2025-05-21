/**
 * Test individual Web IDL extracts.
 * 
 * The tests run against the curated view of the extracts.
 * 
 * Note: the tests are not run against the `@webref/idl` package view of the
 * data because that view is a strict subset of the curated view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import idl from '@webref/idl';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedFolder = path.join(scriptPath, '..', '..', 'curated', 'idl');

describe('The curated view of Web IDL extracts', function () {

  it('contains valid JSON and expected properties', async function () {
    const files = await idl.listAll({ folder: curatedFolder });
    assert(Object.keys(files).length > 0);
    for (const [shortname, file] of Object.entries(files)) {
      assert.equal(shortname, file.shortname);
      assert(/^[a-z0-9-_]+$/i.exec(shortname),
          `invalid shortname: ${shortname}`);
    }
  });

  it('contains Web IDL that can be parsed with webidl2.js', async function () {
    const all = await idl.parseAll({ folder: curatedFolder });
    assert(Object.keys(all).length > 0);
    for (const ast of Object.values(all)) {
      assert(Array.isArray(ast));
      assert(ast.length > 0);
    }
  });
});

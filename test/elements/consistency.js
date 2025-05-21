/**
 * Test the consistency of elements extracts with IDL extracts.
 *
 * The tests run against the curated and package views of the data. An extract
 * that passes a test in the curated view may fail the same test in the package
 * view because of some missing IDL definition in that view.
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import elements from '@webref/elements';
import idl from '@webref/idl';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const views = [
  {
    name: 'curated',
    folder: path.join(scriptPath, '..', '..', 'curated')
  },
  {
    name: '@webref/elements package',
    folder: path.join(scriptPath, '..', '..', 'packages')
  }
];

views.forEach(({ name, folder }) => {
  describe(`The ${name} view of elements extracts`, async () => {
    let allIdl;
    try {
      allIdl = await idl.parseAll({ folder: path.join(folder, 'idl') });
    } catch (err) {
      it('contains valid JSON data', () => {throw err;});
    }
    const interfaces = new Set();
    for (const [shortname, ast] of Object.entries(allIdl)) {
      for (const dfn of ast) {
        if (dfn.name) {
          interfaces.add(dfn.name);
        }
      }
    }

    const allElements = await elements.listAll({ folder: path.join(folder, 'elements') });
    for (const [shortname, data] of Object.entries(allElements)) {
      describe(`The elements extract for ${shortname} in the ${name} view`, () => {
        for (const el of data.elements) {
          if (!el.interface) {
            continue;
          }
          it(`links to a well-known interface for "${el.name}"`, () => {
            assert(interfaces.has(el.interface), `Unknown interface "${el.interface}"`);
          });
        }
      });
    }
  });

});


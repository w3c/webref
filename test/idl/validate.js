/**
 * Test the validity of Web IDL extracts taken in isolation, and together as
 * some validation rules have insufficient type information when looking at each
 * spec in isolation.
 * 
 * The tests on individual extracts run against the curated view. The test that
 * checks the combined Web IDL runs both on the curated view and the
 * `@webref/idl` package view, because new validation errors may be detected in
 * the package view, e.g. due to missing base interfaces.
 */

import { describe, it, before } from 'node:test';
import { strict as assert } from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validate as validateWebIdl } from 'webidl2';
import idl from '@webref/idl';

const scriptPath = path.dirname(fileURLToPath(import.meta.url));
const curatedView = {
  name: 'curated',
  folder: path.join(scriptPath, '..', '..', 'curated', 'idl')
};
const packageView = {
  name: '@webref/idl package',
  folder: path.join(scriptPath, '..', '..', 'packages', 'idl')
};

// Wrapper around the WebIDL2.js validation function to ignore
// [LegacyNoInterfaceObject] "errors".
function validate(ast) {
  const validations = validateWebIdl(ast).filter(v => {
    return v.ruleName !== 'no-nointerfaceobject';
  });
  if (!validations.length) {
    return;
  }
  const message = validations.map(v => {
    return `${v.message} [${v.ruleName}]`;
  }).join('\n\n');
  assert.fail(message);
}

describe(`The ${curatedView.name} view of Web IDL extracts`, function () {
  let all;
  before(async () => {
    all = await idl.parseAll(curatedView.folder);
  });

  it(`The ${curatedView.name} view of Web IDL extracts`, function () {
    for (const [spec, ast] of Object.entries(all)) {
      it(`contains valid Web IDL for ${spec}`, function () {
        validate(ast);
      });
    }
  });

  it(`The combined Web IDL in the ${curatedView.name} view`, function () {
    it('is valid Web IDL', function () {
      validate(Object.values(all).flat());
    });
  });

});


describe(`The ${packageView.name} view of Web IDL extracts`, async () => {
  before(async () => {
    const all = await idl.parseAll(packageView.folder);

    describe(`The combined Web IDL in the ${packageView.name} view`, function () {
      it('is valid Web IDL', function () {
        validate(Object.values(all).flat());
      });
    });
  });

  it('contains data that can be parsed with webidl2.js', () => {});
});


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

const assert = require('assert').strict;
const path = require('path');
const WebIDL2 = require('webidl2');
const idl = require('@webref/idl');

const curatedView = {
  name: 'curated',
  folder: path.join(__dirname, '..', '..', 'curated', 'idl')
};
const packageView = {
  name: '@webref/idl package',
  folder: path.join(__dirname, '..', '..', 'packages', 'idl')
};

// Wrapper around the WebIDL2.js validation function to ignore
// [LegacyNoInterfaceObject] "errors".
function validate(ast) {
  const validations = WebIDL2.validate(ast).filter(v => {
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
  before(async () => {
    const all = await idl.parseAll(curatedView.folder);

    describe(`The ${curatedView.name} view of Web IDL extracts`, function () {
      for (const [spec, ast] of Object.entries(all)) {
        it(`contains valid Web IDL for ${spec}`, function () {
          validate(ast);
        });
      }
    });

    describe(`The combined Web IDL in the ${curatedView.name} view`, function () {
      it('is valid Web IDL', function () {
        this.slow(1000);
        validate(Object.values(all).flat());
      });
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('contains data that can be parsed with webidl2.js', () => {});
});


describe(`The ${packageView.name} view of Web IDL extracts`, async () => {
  before(async () => {
    const all = await idl.parseAll(packageView.folder);

    describe(`The combined Web IDL in the ${packageView.name} view`, function () {
      it('is valid Web IDL', function () {
        this.slow(1000);
        validate(Object.values(all).flat());
      });
    });
  });

  it('contains data that can be parsed with webidl2.js', () => {});
});


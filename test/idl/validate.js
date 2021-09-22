const assert = require('assert').strict;
const WebIDL2 = require('webidl2');

const idl = require('@webref/idl');

function validate(ast) {
  const validations = WebIDL2.validate(ast).filter(v => {
    // Ignore the [LegacyNoInterfaceObject] rule.
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

describe('The @webref/idl data', async () => {
  before(async () => {
    const all = await idl.parseAll();

    // Register late tests
    // (note "describe" level is needed, and there needs to remain an "it" at
    // the parent "describe" level)
    describe('The @webref/idl data is valid per spec', () => {
      for (const [spec, ast] of Object.entries(all)) {
        it(spec, () => {
          validate(ast);
        });
      }
    });

    // Also validate all IDL together. Some validation rules have insufficient
    // type information when looking at each spec in isolation.
    it('is valid when IDL from all specs gets combined', () => {
      validate(Object.values(all).flat());
    });
  });

  // Dummy test needed for "before" to run and register late tests
  // (test will fail if before function throws, e.g. because data is invalid)
  it('can initialize data', () => {});
});

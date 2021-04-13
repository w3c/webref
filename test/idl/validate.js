const assert = require('assert').strict;
const WebIDL2 = require('webidl2');

const idl = require('@webref/idl');

idl.parseAll().then((all) => {
  describe('WebIDL2.validate', () => {
    const ignoreRules = [
      'no-nointerfaceobject',
      'replace-void',
      'require-exposed',
    ];

    for (const [spec, ast] of Object.entries(all)) {
      it(spec, () => {
        const validations = WebIDL2.validate(ast).filter(v => {
          return !ignoreRules.includes(v.ruleName);
        });
        if (!validations.length) {
          return;
        }
        const message = validations.map(v => {
          return `${v.message} [${v.ruleName}]`;
        }).join('\n\n');
        assert.fail(message);
      });
    }
  });
}).then(run);

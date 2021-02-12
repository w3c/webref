const assert = require('assert').strict;
const WebIDL2 = require('webidl2');

const idl = require('@webref/idl');

idl.parseAll().then((all) => {
  describe('WebIDL2.validate', () => {
    const globalIgnoreRules = [
      'no-nointerfaceobject',
      'renamed-legacy',
      'replace-void',
      'require-exposed',
    ];
    const ignoreRules = {
      'SVG': ['constructor-member'],
      'background-fetch': ['dict-arg-optional'],
      'contact-api': ['dict-arg-default'],
      'content-index': ['constructor-member'],
      'css-parser-api': [
        'constructor-member', 'dict-arg-default',
      ],
      'gpuweb': ['dict-arg-optional'],
      'layers': ['dict-arg-default'],
      'periodic-background-sync': ['constructor-member', 'dict-arg-default'],
      'proximity': ['constructor-member'],
      'svg-paths': ['dict-arg-default'],
      'trusted-types': ['dict-arg-default'],
      'uievents': ['dict-arg-default'],
      'web-codecs': ['dict-arg-optional'],
      'webgl1': ['constructor-member'],
      'webrtc-insertable-streams': ['dict-arg-default'],
      'webvtt': ['constructor-member'],
      'webxrlayers': ['dict-arg-default'],
    };

    for (const [spec, ast] of Object.entries(all)) {
      it(spec, () => {
        const validations = WebIDL2.validate(ast);
        const failedRules = new Set();
        for (const {ruleName} of validations) {
          if (!globalIgnoreRules.includes(ruleName)) {
            failedRules.add(ruleName);
          }
        }
        if (spec in ignoreRules) {
          for (const rule of ignoreRules[spec]) {
            assert(failedRules.has(rule), `unexpectedly passed ${rule}`);
            failedRules.delete(rule);
          }
        }
        if (failedRules.size) {
          const sortedRules = Array.from(failedRules);
          sortedRules.sort();
          assert.fail(`failed rules: ${JSON.stringify(sortedRules)}`);
        }
      });
    }
  });
}).then(run);

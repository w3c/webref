const assert = require('assert');
const WebIDL2 = require('webidl2');

const idl = require('@webref/idl');

idl.parseAll().then((all) => {
  describe('WebIDL2.validate', () => {
    const globalIgnoreRules = ['replace-void'];
    const ignoreRules = {
      'CSP': ['constructor-member', 'dict-arg-default', 'require-exposed'],
      'SVG': ['constructor-member', 'require-exposed'],
      'anchors': ['require-exposed'],
      'background-fetch': ['dict-arg-optional'],
      'contact-api': ['dict-arg-default', 'require-exposed'],
      'content-index': ['constructor-member'],
      'css-parser-api': [
        'constructor-member', 'dict-arg-default', 'require-exposed',
      ],
      'filter-effects': ['require-exposed'],
      'frame-timing': ['require-exposed'],
      'gpuweb': ['require-exposed'],
      'keyboard-map': ['require-exposed'],
      'layers': ['dict-arg-default', 'require-exposed'],
      'mediastream-recording': ['constructor-member'],
      'periodic-background-sync': ['constructor-member', 'dict-arg-default'],
      'portals': ['dict-arg-default'],
      'proximity': ['constructor-member'],
      'resize-observer': ['dict-arg-default', 'require-exposed'],
      'svg-animations': ['require-exposed'],
      'svg-markers': ['require-exposed'],
      'svg-paths': ['dict-arg-default', 'require-exposed'],
      'text-detection-api': ['constructor-member'],
      'trusted-types': ['dict-arg-default'],
      'uievents': ['dict-arg-default'],
      'webgl1': ['constructor-member'],
      'webhid': ['constructor-member', 'require-exposed'],
      'webrtc-insertable-streams': ['require-exposed'],
      'webvtt': ['constructor-member'],
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

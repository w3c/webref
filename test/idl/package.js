const assert = require('assert').strict;

const idlPackage = require('../../packages/idl/package.json');
const rootPackage = require('../../package.json');

describe('@webidl/idl package', () => {
  it('webidl2.js dependency version', () => {
    assert.equal(idlPackage.peerDependencies.webidl2,
                 `^${rootPackage.devDependencies.webidl2}`);
  });
});

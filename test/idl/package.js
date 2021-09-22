const assert = require('assert').strict;

const idlPackage = require('../../packages/idl/package.json');
const rootPackage = require('../../package.json');

describe('The @webref/idl package', () => {
  it('uses the same version of webidl2.js as main package', () => {
    assert.equal(idlPackage.peerDependencies.webidl2,
                 `^${rootPackage.devDependencies.webidl2}`);
  });
});

const assert = require('assert').strict;

const cssPackage = require('../../packages/css/package.json');
const rootPackage = require('../../package.json');

describe('@webidl/css package', () => {
  it('uses same version as main package', () => {
    assert.equal(cssPackage.peerDependencies['css-tree'],
                 `^${rootPackage.devDependencies['css-tree']}`);
  });
});

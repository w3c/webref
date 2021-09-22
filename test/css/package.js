const assert = require('assert').strict;

const cssPackage = require('../../packages/css/package.json');
const rootPackage = require('../../package.json');

describe('The @webref/css package', () => {
  it('uses the same version of css-tree as main package', () => {
    assert.equal(cssPackage.peerDependencies['css-tree'],
                 `^${rootPackage.devDependencies['css-tree']}`);
  });
});

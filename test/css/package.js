import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';

import cssPackage from '../../packages/css/package.json' with { type: 'json' };
import rootPackage from '../../package.json' with { type: 'json' };

describe('The @webref/css package', () => {
  it('uses the same version of css-tree as main package', () => {
    assert.equal(cssPackage.peerDependencies['css-tree'],
                 `^${rootPackage.devDependencies['css-tree']}`);
  });
});

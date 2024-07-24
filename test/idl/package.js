import { strict as assert } from 'node:assert';

import idlPackage from '../../packages/idl/package.json' with { type: 'json' };
import rootPackage from '../../package.json' with { type: 'json' };

describe('The @webref/idl package', () => {
  it('uses the same version of webidl2.js as main package', () => {
    assert.equal(idlPackage.peerDependencies.webidl2,
                 `^${rootPackage.devDependencies.webidl2}`);
  });
});

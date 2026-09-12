const assert = require('assert');
const match = require('match-semver');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof match, 'function');
  });
});

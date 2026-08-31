import assert from 'assert';
import match from 'match-semver';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof match, 'function');
  });
});

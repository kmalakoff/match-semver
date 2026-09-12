import assert from 'assert';
import match from 'match-semver';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof match, 'function');
  });
});

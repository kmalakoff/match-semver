# match-semver

Check a version against one or more semver comparators.

```sh
npm install match-semver
```

```js
var assert = require('assert');
var match = require('match-semver');

assert.ok(match('v1.0.0', { eq: 'v1.0.0' }));
assert.ok(match('v1.0.0', { gte: 'v1.0.0', lt: 'v2.0.0' }));
assert.ok(!match('v2.0.0', { lt: 'v2.0.0' }));
```

Supported comparator keys are `eq`, `lt`, `lte`, `gt`, and `gte`. When several are present, the version must satisfy all of them.

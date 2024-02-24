"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return match;
    }
});
var _semver = /*#__PURE__*/ _interop_require_default(require("semver"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function match(version, comparators) {
    if (comparators.eq && !_semver.default.eq(version, comparators.eq) || comparators.lt && !_semver.default.lt(version, comparators.lt) || comparators.lte && !_semver.default.lte(version, comparators.lte) || comparators.gt && !_semver.default.gt(version, comparators.gt) || comparators.gte && !_semver.default.gte(version, comparators.gte)) {
        return false;
    }
    return true;
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }
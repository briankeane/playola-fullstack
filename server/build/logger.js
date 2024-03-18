"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.always = exports.logAndReturnError = exports.error = exports.log = void 0;
/* eslint-disable no-console */
var _suppressOutput = false;
function suppressLogger() {
    _suppressOutput = true;
}
function enableLogger() {
    _suppressOutput = false;
}
function log(str) {
    if (process.env.NODE_ENV !== "test" &&
        process.env.LOGGING_LEVEL !== "verbose" &&
        !_suppressOutput) {
        console.log(str);
    }
}
exports.log = log;
function error(str) {
    if (!_suppressOutput &&
        (process.env.NODE_ENV !== "test" || process.env.LOGGING_LEVEL === "verbose")) {
        console.error(str);
    }
}
exports.error = error;
function logAndReturnError(err) {
    error(err.message);
    return err;
}
exports.logAndReturnError = logAndReturnError;
exports.always = {
    log: (str) => console.log(str),
    error: (str) => console.error(str),
};
exports.default = {
    log,
    error,
    always: exports.always,
    logAndReturnError,
    suppressLogger,
    enableLogger,
};
/* eslint-enable no-console */
//# sourceMappingURL=logger.js.map
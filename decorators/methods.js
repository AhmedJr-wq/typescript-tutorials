"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LoggingLevel = void 0;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["ERROR"] = "ERROR";
    LoggingLevel["INFO"] = "INFO";
    LoggingLevel["WARN"] = "WARN";
    LoggingLevel["DEBUG"] = "DEBUG";
    LoggingLevel["TRACE"] = "TRACE";
})(LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {}));
var appMaxLoggingLevel = LoggingLevel.DEBUG;
function Log(level) {
    console.log("Applying @Log decorator");
    //decorator factory is used by the compiler to apply the decorator
    return function (target, propertyKey, descriptor) {
        console.log('target', target);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
    };
}
exports.Log = Log;

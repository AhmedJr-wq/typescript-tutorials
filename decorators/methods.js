"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.LoggingLevel = void 0;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["ERROR"] = 0] = "ERROR";
    LoggingLevel[LoggingLevel["INFO"] = 1] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 2] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 3] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 4] = "TRACE";
})(LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {}));
var appMaxLoggingLevel = LoggingLevel.DEBUG;
function Log(level) {
    console.log("Applying @Log decorator");
    //decorator factory is used by the compiler to apply the decorator
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (level <= appMaxLoggingLevel) {
                console.log(">> Log: ".concat(String(propertyKey), ", ").concat(JSON.stringify(args)));
            }
            return originalMethod.apply(this, args);
        }; //this value replaces the originalFunction with login capabilties
        return descriptor;
    };
}
exports.Log = Log;

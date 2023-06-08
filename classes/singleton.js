"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
var CourseService = /** @class */ (function () {
    function CourseService() {
        console.log("The course service was initialized");
    } // Private constructor to prevent instantiation from outside the class
    CourseService.instance = function () {
        if (!CourseService.INSTANCE) {
            CourseService.INSTANCE = new CourseService();
        }
        return CourseService.INSTANCE;
    }; // this instance method provides global access point to the single instance of the class.
    return CourseService;
}());
exports.CourseService = CourseService;
var instance = CourseService.instance();
console.log(instance);

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//instance of the class
var Courses = /** @class */ (function () {
    function Courses(_title, subtitle, creationDt, //the readonly means this variable is immutable both inside and outside the class
    price) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.price = price;
        this.validate();
        Courses.TOTAL_COURSES++; //cannot be accessed using this keyword, but the class name. Can be accessed any where  
    } // the constructor is used to initialize the class
    Object.defineProperty(Courses.prototype, "age", {
        //behaviours
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDt.getTime();
            return Math.round(ageInMs / 1000 / 60 / 24);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Courses.prototype, "title", {
        set: function (newTitle) {
            if (!newTitle) {
                throw "Title cannot be empty";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Courses.printTitle = function (coursera) {
        console.log("The title of the course is ".concat(coursera.title));
    };
    Courses.prototype.validate = function () {
        if (this.price <= 0) {
            throw "Price must be larger than zero";
        }
    };
    // private title: string; //this variable cannot be mutated outside the class, it can only be accessible inside the class
    // subtitle: string;
    // creationDt: Date;
    //member variables in constructor 
    //member variables are mutable and public by default
    //static property is shared across all instances
    Courses.TOTAL_COURSES = 0;
    Courses.TYPESCRIPT_TITLE = "Typescript Bootcamp";
    return Courses;
}());
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    function FreeCourse(title, subtitle, creationDt) {
        return _super.call(this, title, subtitle, creationDt, 0) || this;
    }
    return FreeCourse;
}(Courses)); // can access all the functions and properties of the parent class
// const coursera = new Courses(
//     "Typescript",
//     "Learn how to write Typescript code",
//     new Date(2000,1,1),
//     // Courses.TYPESCRIPT_TITLE
//     )
// coursera.title = "Javascript"
// Courses.printTitle(coursera)
// console.log(Courses.TOTAL_COURSES)
// console.log(coursera)
var validate = new FreeCourse("Typescript", "Learn how to write Typescript code", new Date(2000, 1, 1));
var freeCourse = console.log(validate);

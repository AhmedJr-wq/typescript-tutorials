"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//primitive types: numbers
var lessonCount = 10;
var total = lessonCount + 10;
console.log("total =", total);
//primitive types: strings
var title = "My First Typescript Bootcamp";
var subtitle = "Typescript is a great language to practice";
var fullTitle = "Full title: ".concat(title, ": ").concat(subtitle); //template strings
console.log("".concat(fullTitle)); //template strings
//primitive types: boolean
var published = false;
published ? "The course has been published" : "The course has not been published";
console.log(published);
//primitive types: object 
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Typescript is a great language to practice",
    lessonCount: 20
};
console.log(typeof course);

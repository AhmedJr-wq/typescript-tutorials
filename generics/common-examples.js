"use strict";
//Generics allow you to create reusable components or functions that can work with various type of data
//Angle brackets and placeholder name inside them are used to define a generic type of function
Object.defineProperty(exports, "__esModule", { value: true });
var number = new Array();
number.push(20, 39, 40, 45, 23, 34, 78);
// const filter = number.filter(item => item >= 40)
var promise = new Promise(function (resolve, reject) {
    resolve('Hey, Sisu');
});
promise.then(function (val) { });

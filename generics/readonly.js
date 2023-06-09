"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
// interface ImmutableCourse {
//     readonly title: string,
//     readonly subtitle: string,
//     readonly lessonCount: number
// } // the properties of this interface is readonly,thus it cannot be modified. 
//The built-in function 'Readonly' is used to replace the immutable property
function freezeCourse(course) {
    return Object.freeze(course);
} //Object.freeze is used to freeze the course object to make it immutable
var frozen = freezeCourse({
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
});
function freeze(input) {
    return Object.freeze(input);
}
var freez = freeze({
    title: 'New version of title',
    seqNo: 100
});
//Generic Functions with multiple generic parameters
var someData = {
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
};
var moreData = {
    seqNo: 10,
    price: 25
};
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
exports.merge = merge;
var merged = merge(someData, moreData);
console.log(merged);

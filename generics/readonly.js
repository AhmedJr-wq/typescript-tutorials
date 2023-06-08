"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

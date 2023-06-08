"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function freezeCourse(course) {
    return Object.freeze(course);
} //Object.freeze is used to freeze the course object to make it immutable
var frozen = freezeCourse({
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
});
frozen.title = 'ada';

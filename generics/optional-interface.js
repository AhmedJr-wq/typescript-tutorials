"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourse = void 0;
// export interface CourseUpdate {
//     title?: string,
//     subtitle?: string,
//     lessonCount?: number
// } // to reduce the redundancy, we use the in built 'Partial' interface to derive a partial option of the Course, which is identical to the Course
function updateCourse(courseId, update) { }
exports.updateCourse = updateCourse;
updateCourse('1', {
    title: 'New version of title'
});
updateCourse('1', {
    title: 'New version of title',
    subtitle: 'New version of subtitle'
});
updateCourse('1', {
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
});

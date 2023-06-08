

export interface Course {
    title: string,
    subtitle: string,
    lessonCount: number
}

// export interface CourseUpdate {
//     title?: string,
//     subtitle?: string,
//     lessonCount?: number
// } // to reduce the redundancy, we use the in built 'Partial' interface to derive a partial option of the Course

export function updateCourse( courseId: string, update: Partial<Course>) {}

updateCourse('1', {
    title: 'New version of title'
})

updateCourse('1', {
    title: 'New version of title',
    subtitle: 'New version of subtitle'
})

updateCourse('1', {
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
})
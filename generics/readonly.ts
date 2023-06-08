

export interface Course {
    title: string,
    subtitle: string,
    lessonCount: number
}

// interface ImmutableCourse {
//     readonly title: string,
//     readonly subtitle: string,
//     readonly lessonCount: number
// } // the properties of this interface is readonly,thus it cannot be modified. 
//The built-in function 'Readonly' is used to replace the immutable property


function freezeCourse(course: Course): Readonly<Course> {
    return Object.freeze(course)
} //Object.freeze is used to freeze the course object to make it immutable

const frozen = freezeCourse({
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
})

frozen.title = 'ada' //immutable

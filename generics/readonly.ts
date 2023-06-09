

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

// frozen.title = 'ada' //immutable


interface Lesson {
    title: string,
    seqNo: number
}

function freeze<T extends object>(input :T): Readonly<T> {
    return Object.freeze(input)
}

const freez = freeze({
    title: 'New version of title',
    seqNo: 100
})

// const f = freeze(45)

//Generic Functions with multiple generic parameters

const someData = {
    title: 'New version of title',
    subtitle: 'New version of subtitle',
    lessonCount: 100
}

const moreData = {
    seqNo: 10,
    price: 25
}

export function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U)
} //the extends keyword puts a constraint on the generic parameter for type safety 

const merged = merge(someData, moreData)
console.log(merged)

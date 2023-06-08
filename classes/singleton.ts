//Singleton ensures a class has only one instance and provides a global point of access to that instance

export class CourseService {

    private static INSTANCE: CourseService //holds the single instance of the class

    private constructor() {
        console.log(`The course service was initialized`)
    } // Private constructor to prevent instantiation from outside the class

    static instance() {
        if (!CourseService.INSTANCE) {
            CourseService.INSTANCE = new CourseService()
        }

        return CourseService.INSTANCE
    } // this instance method provides global access point to the single instance of the class.
    // It checks if an instance already exists and creates one if it doesn't


}

const instance = CourseService.instance()
console.log(instance)
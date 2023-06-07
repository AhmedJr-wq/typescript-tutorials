import { log } from "console"

//instance of the class
class Courses { 
    // private title: string; //this variable cannot be mutated outside the class, it can only be accessible inside the class
    // subtitle: string;
    // creationDt: Date;
    
    //member variables in constructor 
    //member variables are mutable and public by default

    //static property is shared across all instances
    static TOTAL_COURSES = 0
    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp"

    constructor( 
        private _title: string,
        private subtitle: string,
        private readonly creationDt: Date, //the readonly means this variable is immutable both inside and outside the class
        private price :number
        ) {

            this.validate()
            Courses.TOTAL_COURSES++ //cannot be accessed using this keyword, but the class name. Can be accessed any where  

        } // the constructor is used to initialize the class

    //behaviours
    get age() {
       const ageInMs = new Date().getTime() - this.creationDt.getTime()
       return Math.round(ageInMs / 1000 / 60 / 24)
    }

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty"
        }
        this._title = newTitle
    }

    static printTitle(coursera: Courses) {
        console.log(`The title of the course is ${coursera.title}`)
    }

    protected validate() {
        console.log("Course is available");

        if(this.price <= 0) {
            throw "Price must be larger than zero"
        }
    }

    // changeTitle() {
    //     this.title = "";
    // } // the title variable can only be mutated in this class but not outside the class

}

class FreeCourse extends Courses {

    constructor(
        title: string,
        subtitle: string,
        creationDt: Date, //the readonly means this variable is immutable both inside and outside the class
    ) {

        super(title, subtitle, creationDt, 0)

    }

    protected validate() {
        console.log("Free course is available");
        
    } //using protected means the validate function is visible to the class itself and all its child classes

}// can access all the functions and properties of the parent class and modify the behaviors partially


// const coursera = new Courses(
//     "Typescript",
//     "Learn how to write Typescript code",
//     new Date(2000,1,1),
//     // Courses.TYPESCRIPT_TITLE
//     )
    
// coursera.title = "Javascript"
// Courses.printTitle(coursera)

// console.log(Courses.TOTAL_COURSES)

// console.log(coursera)

// const validate = new FreeCourse(
//     "Typescript",
//     "Learn how to write Typescript code",
//     new Date(2000,1,1),  
// )

// const freeCourse = new FreeCourse (
//     "Javascript"
// )
// console.log(freeCourse);


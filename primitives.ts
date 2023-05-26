import { Console } from "console"

//primitive types: numbers
const  lessonCount = 10

const total = lessonCount + 10

console.log("total =", total)



//primitive types: strings
let  title = "My First Typescript Bootcamp"

let subtitle = "Typescript is a great language to practice"

const fullTitle = `Full title: ${title}: ${subtitle}` //template strings

console.log(`${fullTitle}`) //template strings



//primitive types: boolean
const published = false

published ? "The course has been published" : "The course has not been published"

console.log(published)



//primitive types: object 
const course = {
    title: "Typescript Bootcamp",
    subtitle: "Typescript is a great language to practice",
    lessonCount: 20
    
}

console.log(typeof course)
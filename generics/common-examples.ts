//Generics allow you to create reusable components or functions that can work with various type of data
//Angle brackets and placeholder name inside them are used to define a generic type of function

import { resolve } from "path"

const number = new Array<number>()
number.push(20,39,40,45,23,34,78)

// const filter = number.filter(item => item >= 40)
 
const promise = new Promise<string>((resolve, reject) => {
    resolve('Hey, Sisu')
})

promise.then(val => {})
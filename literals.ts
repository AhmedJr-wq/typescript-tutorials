

let courseTitle: 'Typescript' | 'Javascript' | 'Java' = 'Javascript' // literals can be used together with union type 
//annotate a type to a variable, thus the variable can only be assigned one of the specified literal values

courseTitle = 'Java'

console.log(courseTitle)

let courseCount: 10 | 20 | 4 = 10

courseCount = 20

console.log(courseCount)

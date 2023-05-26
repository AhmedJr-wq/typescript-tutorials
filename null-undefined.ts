//undefined and null
//undefined means no value is assigned yet when a variable is declared
// when no value is assigned yet, null is default value used when a variable is declared
let title = {
    textField: {
        input: "name"
    }
}


console.log(title?.textField?.input) //Optional Chaining

let course = {
    name: "JavaScript",
    description: "JavaScript is a programming language that conforms to the ECMAScript specification."
}

const titleField = course?.name ?? "Test is cancelled"  //null coalescing

console.log(titleField)

const user = {
    name: 'John',
    address: {
      city: 'New York',
      country: 'United State of America',
    },
  };
  
  const country = user.address?.country; // No error, country is null
  
  console.log(country)


interface Person {
    name: string;
    age: number;
    address?: string;  // optional property
  }

  interface Person { 
    contact: number
  } //other properties of the object can also be extended
  
  let person: Person = {
    name: "John Doe",
    age: 25,
    contact: 234457
  };
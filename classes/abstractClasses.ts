//Abstract classes by default cannot be instantiated directly and is meant to serve as a base or blueprint for other classes. 
//Abstract classes are designed to be extended by other classes which can inherit their properties, methods, and behavior.

import { HasId } from "./interfaces";

abstract class Shape implements HasId {

    constructor(
        public id: string,
    ) {

    }

    abstract calculateArea(): number;
  
    printId(): void {
        console.log(`The course Id is ${this.id}`);    
    }

    display() {
      console.log(`The area of this shape is ${this.calculateArea()}`);
    }
  }
  
  class Circle extends Shape {

    constructor(
        id: string,
        private radius: number
    ) {

      super(id); //the super() keyword is used within a subclass to call the constructor of its superclass. 
      //It allows the subclass to inherit and initialize the properties and behavior defined in the superclass.

    }
  
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {

    constructor(
        id: string,
        private width: number, 
        private height: number
    ) {

      super(id);

    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  circle.display(); // Output: "The area of this shape is 78.53981633974483"
  
  const rectangle = new Rectangle(4, 6);
  rectangle.display(); // Output: "The area of this shape is 24"

  
//OBJECTS
//Objects are used to group related data and functions together.

//objects are used to group related data and functions together or they are collections of key value pairs
//objects can have properties and methods (basically functions) inside them
//eg
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); // Method - a function that is part of an object is called a method

//Factory Function

//what is a factory function?

//A factory function is a function that returns an object or a new instance of an object

function createCircle(radius) {
  return {
    radius, //instead of writing radius: radius we can just write radius as the key and value are same // and we removed the hardcoded value of radius so that we can return different radius while calling the function
    draw: function () {
      console.log("draw");
    },
  };
}

//this is basically a object inside a function that creates an object and returns it

//The createCircle function is designed to create circle objects. It takes a radius parameter and returns an object with a radius property and a draw method.

//It does so by returning an object literal that contains two properties: radius and draw.

//The radius property is assigned the value of the radius parameter passed to the function.

//The draw property is a function that logs "draw" to the console.//this is a method

//When you create an object inside a function and return it from that function, it's often referred to as a factory function.

//in the above function what we did is that we created a function called createCircle and inside that function we created an object and returned that object

const circle1 = createCircle(1);

console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor Function

//what is a constructor function?

//A constructor function is a function that returns an object or a new instance of an object

//Constructor functions are used to create multiple objects with the same structure and behavior.

//In JavaScript, we can use the new operator to create a new instance of an object.

//The new operator works as follows:

//It creates a new empty object.

//It sets the value of the this keyword to the new object.

//It calls the constructor function to assign properties to the new object.

//It returns the new object.

//The new operator is used to create a new instance of an object.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);
console.log(circle3);
const circle4 = new Circle(2);
console.log(circle4);

// Notes:  Constructor functions and factory functions are both used to create objects in JavaScript, but they have some key differences:

// Syntax:

// Constructor functions use the new keyword to create instances of objects.
// Factory functions are regular functions that return an object.
// Instance Creation:

// Constructor functions create new instances using the new keyword followed by the function name.
// Factory functions are called like any regular function to create new instances.
// Return Value:

// Constructor functions implicitly return this (the newly created object) if a return statement is not explicitly used.
// Factory functions explicitly return an object.
// Purpose:

// Constructor functions are primarily used to create instances of a specific type of object (e.g., instances of a Circle constructor function represent circles).
// Factory functions are used to create various types of objects based on the input parameters or some other conditions.
// Inheritance:

// Constructor functions can be used in conjunction with prototypes to implement inheritance in JavaScript.
// Factory functions can also be used with other patterns like object composition to achieve similar results to inheritance.
// this Context:

// In constructor functions, this refers to the newly created instance of the object.
// Factory functions do not have a this context unless explicitly specified.

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

//bewlow are the examples of factory and constructor functions

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// Factory function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// Usage
// const circle1 = new Circle(5); // Constructor function
// const circle2 = createCircle(5); // Factory function

//Dynamic Nature of Objects

//In JavaScript, you can add or remove properties to an object after it has been created.

//This is because objects are dynamic. You can add new properties, update existing properties, or remove properties from an object.

//eg

const circle5 = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

//whgat dynamic means is that we can add new properties to the object, update existing properties or remove properties from the object

// and we can delete , add or update the properties of the object after the object has been created

// and what does const means that we can add modify , delete the properties of the object but we cannot reassign the object to a new object but we can not create a new object with the same name

circle5.color = "yellow"; //adding a new property to the object
circle5.draw = function () {
  console.log("draw");
}; //updating the existing property

delete circle5.color; //deleting a property from the object

console.log(circle5);

//Enumerating Properties of an Object

//In JavaScript, you can enumerate the properties of an object using a for...in loop.

//eg

const circle6 = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

for (let key in circle6) {
  console.log(key, circle6[key]);
}

//Cloning an Object

//In JavaScript, you can clone an object using the Object.assign method or the spread operator.

//eg

const circle7 = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
};

//using the spread operator to clone the object

const another = { ...circle7 };
console.log(another);

//using the Object.assign method to clone the object

const another1 = Object.assign({}, circle7);

console.log(another1);

//The Object.assign method is used to copy the values of all enumerable own properties from one or more source objects to a target object.

//It returns the target object.

//In the example above, we use Object.assign to copy all properties from the circle object to an empty object.

//The result is a clone of the circle object.

//The spread operator (...) is used to copy the properties of an object to another object.

//In the example above, we use the spread operator to copy all properties from the circle object to another object.

let x = 10;

let y = x;

x = 20;
y = x;
console.log(x, y);

//value vs reference types

//In JavaScript, there are two categories of types: value types and reference types.

//Value types are copied by their value, and reference types are copied by their reference.

//Value types in JavaScript are:

//Number
//String
//Boolean
//Symbol
//undefined
//null

//Reference types in JavaScript are:

//Object
//Function
//Array

//eg

let x1 = { value: 10 }; //so when we create an object like this it is a reference type , actually what happens behind the hood is that the value of x1 is not stored in the variable names x1 , its memory location is store
let y1 = x1;

x1.value = 20;

console.log(x1, y1);

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

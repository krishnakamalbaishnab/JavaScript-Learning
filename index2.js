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

// conditional statements

// Path: JavaScript-Learning/index2.js
// //conditional statements

//if else statement
//syntax
//if (condition) {
//    statement
//} else {
//    statement
//}

//eg -- simple program to greet the user based on the time

let hour = 14;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else if (hour >= 18 && hour < 21) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}

////switch case statement
//syntax
//switch (key) {
//    case value:
//        statement
//        break;
//
//    default:
//        break;
//}

//eg -- simple program to greet the user based on the time

let hour1 = 14;

switch (
  hour1 //this will check the value of hour1
) {
  case 6: //if the value of hour1 is 6 then it will execute the following statement
    console.log("Good Morning");
    break;
  case 12: //if the value of hour1 is 12 then it will execute the following statement
    console.log("Good Afternoon");
    break;
  case 18: //if the value of hour1 is 18 then it will execute the following statement
    console.log("Good Evening");
    break;
  default: //if the value of hour1 is not 6, 12, 18 then it will execute the following statement
    console.log("Good Night");
    break;
}

//looping statements

//for loop
//syntax
//for (initialization; condition; increment/decrement) {
//    statement
//}

//eg
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}

//reverse for loop
for (let i = 5; i > 0; i--) {
  console.log("Hello World");
}

//check for even numbers
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//odd numbers

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//while loop

//syntax
//while (condition) {
//    statement
//}

//eg
// let i = 0;
// while (i < 5) {
//   console.log("Hello World");
//   i++;
// }

//note that the above for loop and while loop will do the same thing
//the only difference is the syntax
//for loop is used when we know the number of iterations
//while loop is used when we don't know the number of iterations
// in while loop we have to manually increment the value of i
//in for loop we don't have to manually increment the value of i

//in while loop first the condition is checked and then the statement is executed and then the condition is checked again and then the statement is executed again and so on
// in while loop the loop variable is declared outside the loop
//in for loop the loop variable is declared inside the loop sp both of them have different scope and different lifecycle
//eg 2
let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

//do while loop
//syntax
//do {
//    statement
//} while (condition)

//eg
let j = 0;
do {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
} while (j <= 10);
// in do dwhile loop the statement is executed first and then the condition is checked and then the statement is executed again and then the condition is checked again and so on
// so in do while loop the statement is executed at least once
// in while loop the condition is checked first and then the statement is executed and then the condition is checked again and then the statement is executed again and so on
// so in while loop the statement is not executed if the condition is false
// so if we want to execute the statement at least once then we should use do while loop
// if we don't want to execute the statement if the condition is false then we should use while loop
// so do while loop is used when we want to execute the statement at least once
// while loop is used when we don't want to execute the statement if the condition is false

//for in loops

const person = {
  name: "Krishna",
  age: 23,
  adress: "India",
};

// this is an object names as person which contains the properties name , age adress.
//so if we want to iterate over this object we can use the "For....in" loop.

//here is the example

//

// so to console the value of the property we need to acces the property using either by dot notation or by bracket notation

//here is the example:

//console.log(key);  //this line will print only the properties name  , age and address of the person object because it iterates through all the keys present inside the person
//but it will not show the value of each property
for (let key in person) console.log(key, person[key]);

//now let's see an example of for in loop iterating over an array

const color = ["red", "blue", "green", "yellow"];

for (let i in color) {
  //console.log(i); //this only console the index value
  //again if we want to see the indx with value we can use the bracket notation

  console.log(i, color[i]);
}

//for of loop

//in ES6 Javascript we have an different kind of loop to specially deal with array, whcih is called FOR OF Loops

//example

//let's declare an array

const carBrands = ["Land Rover", "Bently", "BMW", "Jaguar"];
// so when we want to iterate over this array we can use the for of loop

for (let i of carBrands) {
  console.log(i); // here to console the value of array we don't have to specifically mention the dot or bracket notation
}

//TODO:Write a function that take two numbers and returns the maximum of two

function maximum(number1, number2) {
  if (number1 > number2) console.log(number1 + " is the Max Number");
  else console.log(number2 + " is the Max Number");
}

maximum(4, 5);

//another way

let number = max(2, 5);
console.log(number);

function max(num1, num2) {
  // if (num1 > num2) return num1;
  // else return num2; //here if we don't use the else keyword than also the code will run. // cleaner code

  //using the ternary operator

  return num1 > num2 ? num1 : num2;
}

//landscape or not
let type = landScape(10, 5);
console.log(type);
function landScape(width, height) {
  return width > height ? "LandScape" : "Not LandScape";
}

//fizzbuzz

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

//there is a important concept here from the above code let's see the below code
// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   return input;
// }

//both the code is doing the same thing, only thing is that, as 15 is divided by both 3 and 5 , so logically it should return FizzBuzz
//but it will not beacuse when the code reaches this if (input % 3 === 0) return "Fizz"; condition it will return Fizz and the execution will be stopped

//demerit
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerHour = 5;

  if (speed < speedLimit + kmPerHour) {
    console.log("The Speed Limit is okay!");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerHour);
  if (points > 12) console.log("License Suspended");
  else console.log("The Points received ", points);
}

checkSpeed(72);

//even and odd numbers

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

showNumbers(20);

//count truthy

const array = [0, null, undefined, "", 2, 3];
console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

//string properties

const movie = {
  Title: "3 Idiots",
  ReleaseYear: 2009,
  Rating: 8.5,
  Director: "Rajkumar Hirani",
};

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, " : ", obj[key]);
    }
  }
}

showProperties(movie);

//the above code will only print the properties which are of type string and not the properties which are of type number

//sum of multiples of 3 and 5

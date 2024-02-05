//javaScript Part 1 - Basics
//javascript is a dynamic language

//NOTE Video: 1. Variables
//Declaring a variable
//before ES6 we used to declare a variable with var keyword

// let firstName = "Krishna";
// var lastName = "Kamal";

//Now we use let and const keywords to declare a variable // ES6

//If we have multiple words in a variable name then we use camelCase and we can dclare these variable in single line and in multiple lines
//eg
//Decalring a variable in single line

// let firstName = "Krishna";=>single line
// let lastName = "Kamal";

//declaring in multiple lines

let firstName = "Krishna",
  lastName = "Kamal";

console.log("The Full name is " + firstName + " " + lastName);

//NOTE Video: 2. Constants
//declaring a constant variable
const interestRate = 0.3;
//interestRate = 1; //if we try to change the value of a constant variable then it will throw an error
console.log(interestRate);

// Note Video: 3. Primitive Types

//Primitive/Value Types
//-Number
//-String
//-Boolean
//-undefined
//-null
//example
let number = 20; //Number Literal
let name = "Krishna"; //String Literal
let isApproved = true; //Boolean Literal
let firstName1 = undefined; //we can also declare a variable without assigning a value. It will be undefined. But it is not recommended. We can use null instead of undefined
let lastName1 = null; //we use null when we want to clear the value of a variable, in this case   we mention explicitly that the value is null

//objects

//objects are reference types

//object is a collection of key value pairs
//object is a container for related variables
//eg of an object
let person = {
  name: "Krishna",
  age: 28,
  address: "Kuralguri",
};
console.log(person);

//how to target these key values

//there are two ways to target these key values

//1. dot notation
// person.name = "Kamal";
// console.log(person.name);

//2. bracket notation
// person["name"] = "Krishna";
// console.log(person.name);

//Arrays
//arrays are reference types

// Array is a data structure that we use to represent a list of items
//eg of an array

let selectedColors = ["red", "blue"]; //array literal syntax ,declaring an array
selectedColors[2] = "green"; //adding an item to an array
console.log(selectedColors.length); //length of an array
console.log(selectedColors); //printing an array

//functions
//functions are a set of statements that performs a task or calculates a value
// functions are reference types

//eg of a function

function greet(name, lastName) {
  //name and lastName are parameters , we can pass any number of parameters
  console.log("Hello " + name + " " + lastName); //concatenation of strings
} //function declaration

greet("Krishna", "Kamal"); //calling a function //Krishna and Kamal are arguments , if we don not pass the second arguments then it will be undefined
greet("Jhon", "Dave"); //calling a function

//types of functions
//1. performing a task

function greet1(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

//2. calculating a value

function square(number) {
  //number is a parameter
  return number * number; //return keyword is used to return a value
}

let number1 = square(2); //calling a function
console.log(number1); //printing a value of a function. There are two functions in this line. One is square and another is console.log

//NOTE Video: 4. Operators

//there are different types of operators
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Bitwise Operators

//1. Arithmetic Operators

// the arithimatic operator are used to perform arithmetic between variables and/or values
// the arithiatic operatiors are
// + => addition
// - => subtraction
// * => multiplication
// / => division
// % => modulus
//the special arithmetic operators are
// ++ => increment
// -- => decrement
// ** => exponentiation (ES2016)

//eg of arithmetic operators
let x = 10;
let y = 20;

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);

console.log(x % y);

//eg of special arithmetic operators

console.log(x++); //post increment -- this line will increment the value of x by 1 but won't print the value of x after increment , thi line will print the value of x before increment i.e 10
console.log(x); //printing the value of x after post increment -- this line will print the value of x after increment i.e 11
console.log(++x); //pre increment
console.log(x); //printing the value of x after pre increment
console.log(x--); //post decrement
console.log(x); //printing the value of x after post decrement
console.log(--x); //pre decrement
console.log(x); //printing the value of x after pre decrement

console.log(2 ** 4); //exponentiation -- it means 2 to the power of 4

//important eqality operators

//strict equality operator
// === => strict equality operator
console.log(1 === 1); //this will return true
console.log("1" === 1); //this will return false because the type of 1st value is string and the type of 2nd value is number

//loose equality operator
// == => loose equality operator

console.log(1 == 1); //this will return true
console.log("1" == 1); //this will return true because the loose equality operator does not check the type of the values

//what this == will do is it will convert the string to number and then it will check the values

// ternary operator

//ternary operator is a shorthand for if else statement

//syntax
//condition ? if true : if false

//eg

let points = 110;
let type = points > 100 ? "gold" : "silver"; //if points is greater than 100 then type will be gold else type will be silver

console.log(type); //this will print gold

//logical operators
//logical operators are used to determine the logic between variables or values
//logical operators are
//1. AND (&&)
//2. OR (||)
//3. NOT (!)

//eg of logical operators

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore; //if both the values are true then the result will be true else it will be false
console.log(eligibleForLoan); //this will print true

let eligibleForLoan1 = highIncome || goodCreditScore; //if any of the value is true then the result will be true else it will be false
console.log(eligibleForLoan1); //this will print true

let eligibleForLoan2 = highIncome || !goodCreditScore; //if highIncome is true and goodCreditScore is false then the result will be true else it will be false
console.log(eligibleForLoan2); //this will print true

//not oprator

let applicationRefused = !eligibleForLoan; //if eligibleForLoan is true then the result will be false else it will be true
console.log(applicationRefused); //this will print false

//falsy values
//undefined
//null
//0
//false
//''
//NaN

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor; //if userColor is defined then currentColor will be userColor else it will be defaultColor
console.log(currentColor); //this will print red

// when the userColor is undefined then the currentColor will be defaultColor i.e blue, javascript will not check the defaultColor if the userColor is defined, it will stop checking the values if the userColor is defined

//bitwise operators
//bitwise operators are used to perform bitwise operations between variables or values
//bitwise operators are
//1. AND (&)
//2. OR (|)
//3. XOR (^)
//4. NOT (~)
//5. Left Shift (<<)
//6. Sign Propagating Right Shift (>>)
//7. Zero Fill Right Shift (>>>)

let a = 2; //binary representation of 2 is 10
let b = 3; //binary representation of 3 is 11
console.log(a & b); //this will print 2 //binary representation of 2 is 10 and binary representation of 3 is 11 so the result will be 10 i.e 2
console.log(a | b); //this will print 3 //binary representation of 2 is 10 and binary representation of 3 is 11 so the result will be 11 i.e 3
console.log(a ^ b); //this will print 1   //binary representation of 2 is 10 and binary representation of 3 is 11 so the result will be 01 i.e 1
console.log(~a); //this will print -3 //binary representation of 2 is 10 so the result will be 01 i.e -3
console.log(a << 1); //this will print 4 //binary representation of 2 is 10 so the result will be 100 i.e 4
console.log(a >> 1); //this will print 1 //binary representation of 2 is 10 so the result will be 1 i.e 1
console.log(a >>> 1); //this will print 1 //binary representation of 2 is 10 so the result will be 1 i.e 1

//operator precedence

//precedence of operators
//1. ()
//2. . []
//3. ++ --
//4. ** (exponentiation)
//5. ! - (unary operators)
//6. * / %
//7. + -
//8. < > <= >=
//9. == !=
//10. &&
//11. ||
//12. ?:

let x1 = 2 + 3 * 4; //this will print 14 because the precedence of * is higher than + so it will multiply 3 and 4 first and then it will add 2 to the result
console.log(x1);

let x2 = (2 + 3) * 4; //this will print 20 because the precedence of () is higher than * so it will add 2 and 3 first and then it will multiply 4 to the result
console.log(x2);

//exercise

//swap two values

let colorOne = "red"; //we have to swap the values of colorOne and colorTwo
let colorTwo = "blue"; // we have to swap the values of colorOne and colorTwo

let tempColor = colorOne; //we are storing the value of colorOne in a temporary variable
colorOne = colorTwo; //we are storing the value of colorTwo in colorOne
colorTwo = tempColor; //we are storing the value of tempColor in colorTwo

console.log(colorOne); //this will print blue
console.log(colorTwo); //this will print red

//INFINITE LOOP

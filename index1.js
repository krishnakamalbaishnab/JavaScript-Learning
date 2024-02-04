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

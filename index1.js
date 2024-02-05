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

//eg 2
let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

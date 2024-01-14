// let firstName = "Krishna";

// let lastName = "Kamal";

// console.log("The Full name is " + firstName + " " + lastName);

//objects

let person = {
  name: "Krishna",
  age: 28,
  address: "Kuralguri",
};

//hoe to target these key values

//tere are two ways to target these key values

//1. dot notation
person.name = "Kamal";
console.log(person.name);
//2. bracket notation
person["name"] = "Krishna";
console.log(person.name);

//Arrays

// Array is a data structure that we use to represent a list of items
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors.length);
console.log(selectedColors);

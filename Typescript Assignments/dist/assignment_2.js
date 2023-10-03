"use strict";
// Store a person’s name in a variable
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Qaseem Ul Haq";
// print the person’s name in lowercase
console.log(personName.toLowerCase());
console.log(`Hello ${personName.toLowerCase()}, would you like to learn some Typescript today?`);
// print the person’s name in uppercase
console.log(personName.toUpperCase());
console.log(`Hello ${personName.toUpperCase()}Would you like to learn some Typescript today?`);
// print the person’s name in titlecase
const titleCase = personName
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Typescript today?`);

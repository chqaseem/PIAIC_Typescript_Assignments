"use strict";
/*You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
 write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = 'apple';
let number = 42;
let colors = ['red', 'green', 'blue'];
let animal = 'cat';
// Tests for equality and inequality with strings
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // Prediction: True
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana'); // Prediction: True
// Tests using the lower case function
console.log("Is fruit in lowercase 'apple'? I predict True.");
console.log(fruit.toLowerCase() === 'apple'); // Prediction: True
// Numerical tests
console.log("Is number == 42? I predict True.");
console.log(number == 42); // Prediction: True
console.log("Is number != 37? I predict True.");
console.log(number != 37); // Prediction: True
console.log("Is number > 30? I predict True.");
console.log(number > 30); // Prediction: True
console.log("Is number < 20? I predict False.");
console.log(number < 20); // Prediction: False
console.log("Is number >= 42? I predict True.");
console.log(number >= 42); // Prediction: True
console.log("Is number <= 40? I predict False.");
console.log(number <= 40); // Prediction: False
// Tests using "and" and "or" operators
console.log("Is fruit == 'apple' and number == 42? I predict True.");
console.log(fruit == 'apple' && number == 42); // Prediction: True
console.log("Is fruit == 'banana' or number == 37? I predict False.");
console.log(fruit == 'banana' || number == 37); // Prediction: False
// Test whether an item is in an array
console.log("Is 'red' in colors array? I predict True.");
console.log(colors.includes('red')); // Prediction: True
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors.includes('yellow')); // Prediction: True
// Additional test for inequality with strings
console.log("Is animal != 'dog'? I predict True.");
console.log(animal != 'dog'); // Prediction: True

"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
const magicians = ['Mosh', 'Harry', 'Guru', 'Bean'];
// Function to show magicians
function show_magicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Function to make magicians great
function make_great(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + ' is Great';
    }
}
// Call make_great to modify the magicians array
make_great(magicians);
// Call show_magicians to verify the modification
show_magicians(magicians);

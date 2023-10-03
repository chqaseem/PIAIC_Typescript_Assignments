"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
const magicians = ['Mosh', 'Harry', 'Guru', 'Bean'];
// Function to show magicians
function show_magicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Call the show_magicians function with the array of magician's names
show_magicians(magicians);

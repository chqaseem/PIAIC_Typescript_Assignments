/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.*/


  // Array of magician's names
const magicians: string[] =  ['Mosh', 'Harry', 'Guru', 'Bean'];

// Function to show magicians
function show_magicians(names: string[]) {
    for (const name of names) {
        console.log(name);
    }
}

// Function to make magicians great
function make_great(names: string[]) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i] + ' is Great';
    }
}

// Call make_great to modify the magicians array
make_great(magicians);

// Call show_magicians to verify the modification
show_magicians(magicians);

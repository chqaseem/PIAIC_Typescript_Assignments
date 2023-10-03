/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with 
a copy of the array of magicians’ names. Because the original array will be unchanged, return the
 new array and store it in a separate array. Call show_magicians() with each array to show that you 
 have one array of the original names and one array with the Great added to each magician’s name.*/


 // Original array of magician's names
const original_magicians: string[] = ['Mosh', 'Harry', 'Guru', 'Bean'];

// Function to show magicians
function show_magicians(names: string[]) {
    for (const name of names) {
        console.log(name);
    }
}

// Function to make magicians great
function make_great(names: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < names.length; i++) {
        great_magicians.push(names[i] + ' os Great');
    }
    return great_magicians;
}

// Call make_great with a copy of the original magicians array
const great_magicians_array = make_great([...original_magicians]);

// Call show_magicians to show the original names
console.log("Original Magicians:");
show_magicians(original_magicians);

// Call show_magicians to show the modified names with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians_array);

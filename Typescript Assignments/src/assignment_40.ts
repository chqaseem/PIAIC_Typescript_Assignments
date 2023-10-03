/*Magicians: Make a array of magician’s names. Pass the array to a function called
 show_magicians(), which prints the name of each magician in the array.*/

 // Array of magician's names
const magicians: string[] = ['Mosh', 'Harry', 'Guru', 'Bean'];

// Function to show magicians
function show_magicians(names: string[]) {
    for (const name of names) {
        console.log(name);
    }
}

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);

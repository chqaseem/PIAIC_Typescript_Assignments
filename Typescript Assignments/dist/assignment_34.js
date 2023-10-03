"use strict";
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals
 in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement
 about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these
  animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of animals with a common characteristic (they are all mammals)
const animals = ['Dog', 'Cat', 'Elephant'];
// Loop to print each animal name
console.log("List of animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Loop to print a statement about each animal
console.log("\nThoughts about these animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}
// Statement about their common characteristic
console.log("\nAny of these animals would make a great pet because they are all mammals!");

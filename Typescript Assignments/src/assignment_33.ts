/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
 For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states
 how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then
  an additional sentence, such as I really love pizza! */

  // Array of favorite pizza names
const favoritePizzas: string[] = ['Kebab Crust', 'Tikka Supreme', 'Chicken Malai Boti'];

// Loop to print each pizza name
console.log("My favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

// Loop to print a sentence for each pizza
console.log("\nMy thoughts on these pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}

// Statement about loving pizza
console.log("\nI really love pizza!");

/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.*/


 function make_sandwich(sandwichItems: string[]) {
    console.log("Making a sandwich with the following items:");
    for (const item of sandwichItems) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
make_sandwich(['Chicken Club', 'Cheese', 'Nutella']);
make_sandwich(['Grill', 'Soy souce']);
make_sandwich(['Peanut Butter', 'Jelly', 'Banana']);

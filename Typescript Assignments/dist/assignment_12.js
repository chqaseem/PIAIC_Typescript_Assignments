"use strict";
/*Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”*/
Object.defineProperty(exports, "__esModule", { value: true });
let transportationList = ["Rolls Royce Cullinan", "Audi Q9", "BMW X5", "Mercedes Benz GLC", "Lexus LX600", "Toyota Land Cruiser",];
// Statements about each transportation item
for (let i = 0; i < transportationList.length; i++) {
    console.log(`I would like to own a ${transportationList[i]}.`);
}

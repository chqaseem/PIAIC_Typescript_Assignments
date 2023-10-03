"use strict";
/*Start with the array you used in Exercise 11, but instead of just printing each
person’s name, print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
let Names = ["Qaseem", "Ahmad", "Muaaz", "Muheeb", "Faizan"];
let Message = "Hello, %s! Hope you're doing well.";
for (let i = 0; i < Names.length; i++) {
    let personalizedMessage = Message.replace('%s', Names[i]);
    console.log(personalizedMessage);
}

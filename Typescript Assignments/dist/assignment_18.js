"use strict";
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let inviteList = ["Faizan", "Ahmad", "Muheeb", "Muaaz"];
for (let i = 0; i < inviteList.length; i++) {
    console.log(`Dear ${inviteList[i]},\nYou are cordially invited to a dinner at my place. It would be an honor to have you join us.
        \nPlease let me know if you can make it. \n\nBest regards, \n[Qaseem Ul Haq]`);
    console.log("");
}
console.log(`You are inviting ${inviteList.length} people to dinner.`);

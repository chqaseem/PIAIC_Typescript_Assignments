"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.*/
Object.defineProperty(exports, "__esModule", { value: true });
let inviteList = ["Faizan", "Ahmad", "Muheeb", "Muaaz"];
const guestWhoCantMakeIt = "Ahmad";
const newGuest = "Usman";
const indexOfCantMakeIt = inviteList.indexOf(guestWhoCantMakeIt);
if (indexOfCantMakeIt !== -1) {
    inviteList[indexOfCantMakeIt] = newGuest;
}
// Add more guests
inviteList.unshift("Ghous"); // Add a guest to the beginning
inviteList.splice(Math.floor(inviteList.length / 2), 0, "Hammad"); // Add a guest to the middle
inviteList.push("Salman"); // Add a guest to the end
function sendInvitations(guests) {
    for (let i = 0; i < guests.length; i++) {
        console.log(`Dear ${guests[i]},
            You are cordially invited to a dinner at my place. It would be an honor to have you join us.
            Please let me know if you can make it.

            Best regards,
            [Qaseem Ul Haq]`);
        console.log("");
    }
}
console.log("Good news! We found a bigger dinner table.");
console.log();
sendInvitations(inviteList);
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

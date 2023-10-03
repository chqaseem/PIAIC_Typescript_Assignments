"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
  send out a new set of invitations. You’ll have to think of someone else to invite.*/
Object.defineProperty(exports, "__esModule", { value: true });
let inviteList = ["Faizan", "Ahmad", "Muheeb", "Muaaz"];
const guestWhoCantMakeIt = "Ahmad";
const newGuest = "Usman";
const indexOfCantMakeIt = inviteList.indexOf(guestWhoCantMakeIt);
if (indexOfCantMakeIt !== -1) {
    inviteList[indexOfCantMakeIt] = newGuest;
}
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
console.log();
sendInvitations(inviteList);
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

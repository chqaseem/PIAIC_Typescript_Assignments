/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
 for the dinner, and you have space for only two guests.*/

let inviteList: string[] = ["Faizan", "Ahmad", "Muheeb", "Muaaz"];
const guestWhoCantMakeIt = "Ahmad";
const newGuest = "Usman";

const indexOfCantMakeIt = inviteList.indexOf(guestWhoCantMakeIt);
if (indexOfCantMakeIt !== -1) {
    inviteList[indexOfCantMakeIt] = newGuest;
}

// Add more guests
inviteList.unshift("Ghous"); // Add a guest to the beginning
inviteList.splice(Math.floor(inviteList.length / 2), 0, "Hamman"); // Add a guest to the middle
inviteList.push("Salman"); // Add a guest to the end

function sendInvitations(guests: string[]) {
    for (let i = 0; i < guests.length; i++) {
        console.log(
            `Dear ${guests[i]},
            You are cordially invited to a dinner at my place. It would be an honor to have you join us.
            Please let me know if you can make it.

            Best regards,
            [Qaseem Ul Haq]`
        );
        console.log("");
    }
}

console.log("Good news! We found a bigger dinner table.");
console.log();

console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

while (inviteList.length > 2) {
    const removedGuest = inviteList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

sendInvitations(inviteList);

inviteList.pop();
inviteList.pop();



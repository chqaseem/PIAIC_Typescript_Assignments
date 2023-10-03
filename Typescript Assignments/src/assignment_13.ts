/*If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/


let inviteList: string[] = ["Faizan", "Ahmad", "Muheeb", "Muaaz"];


for (let i = 0; i < inviteList.length; i++) {
    console.log(
        `Dear ${inviteList[i]},\n You are cordially invited to a dinner at my place. It would be an honor to have you join us.
        \n Please let me know if you can make it. \n\n Best regards, \n [Qaseem Ul Haq]`);
    console.log("");
}


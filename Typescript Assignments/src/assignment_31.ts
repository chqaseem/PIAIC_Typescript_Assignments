/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has 
already been used. If it has, print a message that the person will need 
to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// List of current usernames
const current_users: string[] = ['admin', 'arham', 'shaiz', 'bilu', 'raja'];

// List of new usernames to check
const new_users: string[] = ['pankaj', 'sherry', 'hamid', 'james', 'pappu'];

// Loop through new_users to check for unique usernames
for (let i = 0; i < new_users.length; i++) {
    const newUsername = new_users[i];
    const isUsernameTaken = current_users.some((currentUsername) =>
        currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUsername}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username '${newUsername}' is available.`);
    }
}

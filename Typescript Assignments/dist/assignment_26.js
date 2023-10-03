"use strict";
/*Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
Object.defineProperty(exports, "__esModule", { value: true });
const alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Unknown alien color. No points earned.");
}
// Version 2
const alien_color2 = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
else {
    console.log("Unknown alien color. No points earned.");
}

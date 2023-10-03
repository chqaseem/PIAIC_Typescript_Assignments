"use strict";
/* Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of book objects
const books = [
    {
        title: "A Smarter Way to Learn JavaScript",
        author: "Mark Myers",
        publicationYear: 2014
    },
    {
        title: "Rich Dad Poor Dad",
        author: " Robert Kiyosaki and Sharon Lechter",
        publicationYear: 1997
    },
    {
        title: "The Personal MBA ",
        author: "Josh Kaufman",
        publicationYear: 2010
    },
];
const indexOutOfBounds = books[10];
// Correct the error (remove the line above)
console.log("List of Books:");
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log();
}

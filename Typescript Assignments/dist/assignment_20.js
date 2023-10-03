"use strict";
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
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
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951
    }
];
console.log("List of Books:");
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log();
}

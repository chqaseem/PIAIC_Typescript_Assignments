"use strict";
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers,
countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
const countries = [
    "Pakistan",
    "Islamabad",
    "Daman e koh",
    "Faisal Masjid",
    "Rawal Dam",
    "Centaurus Mall",
    "Giga Mall",
    "Monal Hotel",
    "Ayub National Park",
    "Rawalpindi Railway Station"
];
console.log("List of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1}. ${countries[i]}`);
}

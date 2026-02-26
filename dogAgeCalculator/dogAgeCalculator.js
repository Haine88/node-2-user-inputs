/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

let name = process.argv[2];
let humanAge = Number(process.argv[3]);

// Calculate dog years
// Year 1 = 15 dog years
// Year 2 = +9 dog years (total: 24)
// Every year after = +5 dog years

let dogAge;

if (humanAge === 1) {
    dogAge = 15;
} else if (humanAge === 2) {
    dogAge = 24;
} else {
    dogAge = 24 + (humanAge - 2) * 5;
}

console.log("Your dog, " + name + ", is " + humanAge + " years old, but that's " + dogAge + " years old in dog years!");
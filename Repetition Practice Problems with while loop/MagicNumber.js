const prompt = require("prompt-sync")();

let low = 1;
let high = 100;
let found = false;

console.log("Think of a number between 1 and 100.");

while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/no): `);

    if (response.toLowerCase() === "yes") {
        console.log(`Great! Your Magic Number is ${mid}`);
        found = true;
    } else {
        let direction = prompt(`Is your number greater than ${mid}? (yes/no): `);
        if (direction.toLowerCase() === "yes") {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

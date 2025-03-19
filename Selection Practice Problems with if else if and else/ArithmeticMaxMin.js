let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

console.log("Results:");
console.log("1. a + b * c = " + result1);
console.log("2. a % b + c = " + result2);
console.log("3. c + a / b = " + result3);
console.log("4. a * b + c = " + result4);

// Finding max and min
let max = result1;
if (result2 > max) max = result2;
if (result3 > max) max = result3;
if (result4 > max) max = result4;

let min = result1;
if (result2 < min) min = result2;
if (result3 < min) min = result3;
if (result4 < min) min = result4;

console.log("Maximum Value:", max);
console.log("Minimum Value:", min);

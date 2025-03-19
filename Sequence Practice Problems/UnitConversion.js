// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

// b. Convert rectangular plot (60 ft x 40 ft) to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; // 1 ft = 0.3048 meters
let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log(`Plot Size: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

// c. Calculate the area of 25 such plots in acres
let areaInSqFeet = lengthFeet * widthFeet;
let totalAreaInSqFeet = areaInSqFeet * 25;
let sqFeetToAcres = 43560; // 1 acre = 43560 sq feet
let areaInAcres = totalAreaInSqFeet / sqFeetToAcres;
console.log(`Total area of 25 plots: ${areaInAcres.toFixed(2)} acres`);

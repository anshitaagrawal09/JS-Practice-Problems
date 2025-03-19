// Get day and month from command line arguments
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

// Check if the date is between March 20 and June 20
let isValid = false;

if ((month == 3 && day >= 20) || (month == 4) || (month == 5) || (month == 6 && day <= 20)) {
    isValid = true;
}

console.log(isValid ? "True" : "False");

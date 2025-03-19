let num = parseInt(process.argv[2]);

console.log(`Prime factors of ${num}:`);

// Divide by 2 until odd
while (num % 2 === 0) {
    console.log(2);
    num /= 2;
}

// Check odd factors from 3 onwards
for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
        console.log(i);
        num /= i;
    }
}

// If num is still prime and greater than 2
if (num > 2) {
    console.log(num);
}

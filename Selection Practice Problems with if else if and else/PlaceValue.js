let num = parseInt(process.argv[2]);

if (num === 1) console.log("Unit");
else if (num === 10) console.log("Ten");
else if (num === 100) console.log("Hundred");
else if (num === 1000) console.log("Thousand");
else if (num === 10000) console.log("Ten Thousand");
else if (num === 100000) console.log("Lakh");
else console.log("Invalid Input! Enter numbers like 1, 10, 100, 1000...");

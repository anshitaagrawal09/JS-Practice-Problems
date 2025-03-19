function generateRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

function generateBirthMonthDistribution() {
    let birthMonthMap = new Map();

    // Initialize map with months 1 to 12
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    for (let i = 1; i <= 50; i++) {
        let month = generateRandomMonth();
        birthMonthMap.get(month).push(`Person${i}`);
    }

    console.log("Birth Month Distribution:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        console.log(`Month ${month}:`, individuals.length > 0 ? individuals : "No Birthdays");
    }
}

generateBirthMonthDistribution();

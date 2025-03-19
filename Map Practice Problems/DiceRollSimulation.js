function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceRollSimulation() {
    let diceMap = new Map();
    let maxRolls = 10;
    
    // Initialize map with numbers 1 to 6
    for (let i = 1; i <= 6; i++) {
        diceMap.set(i, 0);
    }

    let found = false;
    while (!found) {
        let roll = rollDice();
        diceMap.set(roll, diceMap.get(roll) + 1);

        // Check if any number has reached 10 rolls
        if (diceMap.get(roll) === maxRolls) {
            found = true;
        }
    }

    console.log("Final Dice Roll Counts:", diceMap);

    // Find number with max and min occurrences
    let maxNum = [...diceMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    let minNum = [...diceMap.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log(`Number rolled maximum times: ${maxNum[0]} (${maxNum[1]} times)`);
    console.log(`Number rolled minimum times: ${minNum[0]} (${minNum[1]} times)`);
}

diceRollSimulation();

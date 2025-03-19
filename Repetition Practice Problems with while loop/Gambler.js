let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5; // 50% win chance

    if (betResult) {
        money++;  // Win Rs 1
        wins++;
    } else {
        money--;  // Lose Rs 1
    }
}

console.log(`Game Over! Final Money: Rs ${money}`);
console.log(`Total Bets Placed: ${bets}`);
console.log(`Total Wins: ${wins}`);

function findRepeatedDigits() {
    let repeatedNumbers = [];
    for (let i = 10; i < 100; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedNumbers.push(i);
        }
    }
    return repeatedNumbers;
}

console.log("Repeated Digit Numbers:", findRepeatedDigits());

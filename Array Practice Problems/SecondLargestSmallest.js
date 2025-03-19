function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // 3-digit number
    }
    return numbers;
}

function findSecondLargestSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }

    console.log("Numbers:", arr);
    console.log("2nd Smallest:", secondMin);
    console.log("2nd Largest:", secondMax);
}

let numbers = generateRandomNumbers(10);
findSecondLargestSmallest(numbers);

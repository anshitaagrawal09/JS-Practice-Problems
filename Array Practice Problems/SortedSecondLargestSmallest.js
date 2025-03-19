function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100);
    }
    return numbers;
}

function findSecondLargestSmallest(arr) {
    arr.sort((a, b) => a - b);
    console.log("Sorted Array:", arr);
    console.log("2nd Smallest:", arr[1]);
    console.log("2nd Largest:", arr[arr.length - 2]);
}

let numbers = generateRandomNumbers(10);
findSecondLargestSmallest(numbers);

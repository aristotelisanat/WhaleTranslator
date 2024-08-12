// Task 1: Create input variable
const input = 'turpentine and turtles';

// Task 2: Create vowels array
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Task 3: Create resultArray
let resultArray = [];

// Task 4 & 5: Iterate through input
for (let i = 0; i < input.length; i++) {
    // console.log(i); // Uncomment to check work

    // Task 6 & 7: Nested loop to compare with vowels
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j); // Uncomment to check work

        // Task 8 & 9: Compare and add matching vowels
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }

    // Task 10 & 11: Double 'e' and 'u'
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

// Task 12: Log resultArray
console.log(resultArray);

// Task 13: Create resultString
const resultString = resultArray.join('').toUpperCase();

// Task 14: Log the final result
console.log(resultString);

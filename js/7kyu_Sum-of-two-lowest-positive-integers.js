// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
    let positive = numbers
        .filter(num => num >= 0)
        .sort((a, b) => a-b)
    return positive[0] + positive[1]
}

// function sumTwoSmallestNumbers(numbers) {
//     let positive = numbers.filter(num => num >= 0)
//     let min1 = Math.min(...positive)
//     positive.splice(positive.indexOf(min1), 1)
//     let min2 = Math.min(...positive)
//     return min1 + min2
// }

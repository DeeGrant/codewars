// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    fizzBuzzSum = 0
    for (let i = 3; i < number; i++) {
        fizzBuzzSum += !(i % 5) || !(i % 3) ? i : 0
    }
    return fizzBuzzSum
}

// Note - good
// function solution(number){
//     fizzBuzzSum = 0
//     for (let i = 3; i < number; i++) {
//         if (i % 5 === 0 || i % 3 === 0) {
//             fizzBuzzSum += i
//         }
//     }
//     return fizzBuzzSum
// }

// Note - good
// function solution(number){
//     return Array.from({length: number}, (_,i) => i++)
//         .reduce((a, num) => a + ((num % 5 === 0 || num % 3 === 0) ? num : 0), 0)
// }

// Note - good
// function solution(number){
//     return Array.from({length: number}, (_,i) => i++)
//         // [...new Array(number).keys()]
//         .filter(num => (num % 5 === 0 || num % 3 === 0) ? num : 0)
//         // .map(num => (num % 5 === 0 || num % 3 === 0) ? num : 0)
//         .reduce((a, num) => a + num, 0)
// }

// Note - too slow (something to do with decrementing 'number' and weird for-loop notation?)
// function solution2(number){
//     fizzBuzzSum = 0
//     for (number > 3; number--;) {
//         if (number % 5 === 0 || number % 3 === 0) {
//             fizzBuzzSum += number
//         }
//     }
//     return fizzBuzzSum
// }

// Tests

function test(n, expected) {
    let actual = solution(n)
    Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
    test(10,23)
    test(20,78)
    test(200,9168)
})
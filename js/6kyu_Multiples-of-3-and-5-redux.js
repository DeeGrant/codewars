// https://www.codewars.com/kata/54bb6ee72c4715684d0008f9

// Note - error in JS Kata implementation
// effectively a duplicate of Multiples of 3 and 5

function solution(number){
    return [...new Array(number).keys()]
        .filter(num => !(num % 5) || !(num % 3))
        .reduce((acc, num) => acc + num, 0)
}

// function solution(number){
//     return Array.from({length: number}, (_,i) => i++)
//         .filter(num => !(num % 5) || !(num % 3))
//         .reduce((acc, num) => acc + num, 0)
// }

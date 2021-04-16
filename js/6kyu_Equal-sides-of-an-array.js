// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

let sum = (arr) => arr.reduce((a, b) => a + b, 0)

let findEvenIndex = (arr) => arr.findIndex((num, index, arr) => sum(arr.slice(0, index)) === sum(arr.slice(index+1)))


// let findEvenIndex = (arr) =>
//     arr.reduce((a, num, index, arr) =>
//         sum(arr.slice(0, index)) === sum(arr.slice(index+1)) ?
//             index
//             :
//             a
//     , -1)

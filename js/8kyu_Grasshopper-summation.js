// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
    return Array(num)
        .fill('')
        .reduce((sum, n, i) => sum + ++i, 0)
}


// var summation = function (num) {
//     return Array
//         .from({length: num}, (_,i) => ++i)
//         .reduce((sum, n) => sum + n, 0)
// }

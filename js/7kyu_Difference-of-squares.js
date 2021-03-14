// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

// feels easier to read
function differenceOfSquares(n){
    let sum = 0
    let sumSquares = 0
    for (let i = 1; i <= n; i++) {
        sum += i
        sumSquares += Math.pow(i, 2)
    }
    return Math.abs(Math.pow(sum, 2) - sumSquares)
}

// function differenceOfSquares(n){
//     let nums = Array.from({length: n}, (_,i) => ++i)
//     let squaredSum = Math.pow(nums.reduce((sum, num) => sum + num, 0), 2)
//     let sumSquares = nums.reduce((sum, num) => sum + Math.pow(num, 2), 0)
//     return Math.abs(squaredSum - sumSquares)
// }

// TODO look into statistics for 'shortcut' equations
// x (x + 1) / 2
// x (X + 1) (2x + 1) / 6
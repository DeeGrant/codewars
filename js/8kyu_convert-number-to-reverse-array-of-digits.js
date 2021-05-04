// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// more concise
function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

// function digitize(n) {
//     return n.toString().split('').reverse().map(s => Number(s))
// }
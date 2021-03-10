// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    return arr.filter(n => n > 0).reduce((acc, n) => acc + n, 0)
}
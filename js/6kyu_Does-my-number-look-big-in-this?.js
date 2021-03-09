// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
    let numArr = [...value.toString()].map(s => parseInt(s))
    let power = numArr.length
    let narcNum = numArr.reduce((a, num) => a + (num ** power), 0)
    return narcNum === value
}
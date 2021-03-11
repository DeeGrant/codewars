// https://www.codewars.com/kata/5959ec605595565f5c00002b

function reverseBits (n) {
    // console.log(`${n}: ${[...n.toString(2)]}`)
    return parseInt([...n.toString(2)].reverse().join(''), 2)
}

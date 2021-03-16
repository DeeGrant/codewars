// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let i = 0
    while (num > 9) {
        num = [...num.toString().split('')].reduce((acc, num) => acc * num, 1)
        i++
    }
    return i
}

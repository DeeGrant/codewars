function abstractNum(num, f = null) {
    return f !== null ? f(num) : num
}
let zero = (f = null) => abstractNum(0, f)
let one = (f = null) => abstractNum(1, f)
let two = (f = null) => abstractNum(2, f)
let three = (f = null) => abstractNum(3, f)
let four = (f = null) => abstractNum(4, f)
let five = (f = null) => abstractNum(5, f)
let six = (f = null) => abstractNum(6, f)
let seven = (f = null) => abstractNum(7, f)
let eight = (f = null) => abstractNum(8, f)
let nine = (f = null) => abstractNum(9, f)

let plus = (y) => (x) => x + y
let minus = (y) => (x) => x - y
let times = (y) => (x) => x * y
let dividedBy = (y) => (x) => Math.floor(x / y)

// tests
console.log(three(plus(three())))
console.log(five(dividedBy(two())))
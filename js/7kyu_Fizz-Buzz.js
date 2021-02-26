// https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/solutions/javascript

function solution(number){
    let ret = [0, 0, 0]
    for (let i = number - 1; i > 0; i--) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(`FizzBuzz ${i}`)
            ret[2] += 1
        } else if (i % 5 === 0) {
            console.log(`Buzz ${i}`)
            ret[1] += 1
        } else if (i % 3 === 0) {
            console.log(`Fizz ${i}`)
            ret[0] += 1
        }
    }
    return ret
}

function smartSolution(number){
    --number
    const fizzBuzz = Math.floor(number / 15)
    const buzz = Math.floor(number / 5) - fizzBuzz
    const fizz = Math.floor(number / 3) - fizzBuzz
    return [fizz, buzz, fizzBuzz]
}

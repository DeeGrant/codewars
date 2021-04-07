// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
    let evens = []
    let odds = []
    let numArr = numbers.split(' ')
    numArr.forEach(number => number % 2 ? evens.push(number) : odds.push(number))
    return numArr.indexOf(evens.length > odds.length ? odds[0] : evens[0]) + 1
}

// clever solution
// function iqTest(numbers){
//     let evenOddsArr = numbers.split(' ').map(n => n % 2)
//     let evenOdd = nums.reduce((a,b) => a + b) > 1 ? 0 : 1
//     return numArr.indexOf(evenOdd) + 1
// }
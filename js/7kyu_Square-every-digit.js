// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    let squaredStr = [...num.toString()].map(n => parseInt(n, 10) ** 2).join('')
    return parseInt(squaredStr, 10)
}
// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
    return numbers.reduce((acc, num) => acc + Math.pow(num, 2), 0)
}
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    let numArr = numbers.split(' ')
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}

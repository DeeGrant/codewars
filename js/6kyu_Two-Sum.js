// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let firstNum = numbers[i]
        let remainderArr = numbers.slice(i + 1)
        let remainder = target - firstNum
        if (remainderArr.includes(remainder)){
            let j = remainderArr.indexOf(remainder)
            return [i, i + j + 1]
        }
    }
}
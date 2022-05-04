// https://www.codewars.com/kata/5a1cb5406975987dd9000028

function sortArray(array) {
    const even = array.filter(num => num % 2 === 0).sort((a,b) => a - b)
    const odds = array.filter(num => num % 2 !== 0).sort((a,b) => b - a)
    let ret = []
    for (let i = 0; i < array.length; i++) {
        ret.push(array[i] % 2 === 0 ? even.pop() : odds.pop())
    }
    return ret
}

// succinct
function sortArray2(array) {
    const even = array.filter(num => num % 2 === 0).sort((a,b) => a - b)
    const odds = array.filter(num => num % 2 !== 0).sort((a,b) => b - a)
    return array.map(num => num % 2 ? odds.pop() : even.pop())
}

sortArray([5, 3, 2, 8, 1, 4, 11])
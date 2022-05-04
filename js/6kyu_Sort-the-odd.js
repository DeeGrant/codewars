// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let odds = array.filter(num => num % 2 !== 0) // handles negative odd numbers (-1)
    odds.forEach(_ => {
        let last_odd_index = null
        for (let i = 0; i < array.length; i++) {
            let num = array[i]
            if (num % 2 !== 0) {
                if (last_odd_index !== null) {
                    if (array[last_odd_index] > num) {
                        array[i] = array[last_odd_index]
                        array[last_odd_index] = num
                    }
                }
                last_odd_index = i
            }
        }
    })
    return array
}

// clearer
function sortArray2(array) {
    const ret = array.map(num => num % 2 === 0 ? num : '')
    const odd = array.filter(num => num % 2 !== 0).sort((a,b) => a-b)
    for (let i = 0, j = 0; i < ret.length; i++) {
        if (ret[i] === '') {
            ret[i] = odd[j]
            j++
        }
    }
    return ret
}

// more so
function sortArray3(array) {
    const ret = array.map(num => num % 2 === 0 ? num : '')
    const odd = array.filter(num => num % 2 !== 0).sort((a,b) => a-b)
    for (let i = 0; i < ret.length; i++) {
        if (ret[i] === '') ret[i] = odd.shift()
    }
    return ret
}

// succinct
function sortArray4(array) {
    const odd = array.filter((num) => num % 2).sort((a,b) => a-b);
    return array.map((num) => num % 2 ? odd.shift() : num);
}

sortArray([7,1])
sortArray([5,8,6,3,4])
sortArray([5, 4, 3, 2, 1])
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

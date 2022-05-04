// https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5

function findUniq(arr) {
    let memory = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i]
        if (equals(element, memory)){
            memory = element
            continue
        }

        if (i === arr.length - 1) {
            return element
        }

        if (equals(element, arr[i+1])) {
            return memory
        } else {
            return element
        }
    }
}

function equals(element_1, element_2) {
    if (typeof element_1 !== typeof element_2) return false

    switch (typeof element_1) {
        case "bigint":
        case "boolean":
        case "undefined":
            return element_1 === element_2
        case "number":
            if (Number.isNaN(element_1) && Number.isNaN(element_2)) {
                return true
            }
            return parseFloat(element_1) === parseFloat(element_2)
        case "string":
            let arr_1 = element_1.toLowerCase().split('')
            let arr_2 = element_2.toLowerCase().split('')
            return arr_1.every(letter => arr_2.includes(letter))
        case "object":
            return Object.is(element_1, element_2)
    }
}

// very succinct
function findUniq2(arr) {
    let ans = arr.filter(x => !Object.is(x, arr[0]))
    return ans.length === 1 ? ans[0] : arr[0]
}

findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 4, 4, 'foo', 4 ])
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
    let memory = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let word = arr[i]
        if (equals(word, memory)){
            continue
        }

        if (i === arr.length - 1) {
            return word
        }

        if (equals(word, arr[i+1])) {
            return memory
        } else {
            return word
        }
    }
}

function equals(word_1, word_2) {
    let arr_1 = word_1.toLowerCase().split('')
    let arr_2 = word_2.toLowerCase().split('')

    return arr_1.every(letter => arr_2.includes(letter))
}

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])



// let unique = lower.map(word => word.split('').filter(letter => word.indexOf(letter) === word.lastIndexOf(letter)).sort().join('').trim())
// unique.sort()
// return unique
// let ordered = arr.map(word => word.toLowerCase().split('').filter(letter => word.toLowerCase().indexOf()).sort().join('').trim()).sort()
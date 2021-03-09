// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    let textArr = text.toLowerCase().split('')
    let counts = {}
    textArr.forEach(char => counts[char] = (counts[char] || 0) + 1)

    let ret = 0
    for (let char in counts) {
        if(counts[char] > 1) {
            console.log(`${char}: ${counts[char]}`)
            ret += 1
        }
    }
    return ret
}
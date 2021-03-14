// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
    let sLow = str.toLowerCase()
    let sArr = [...sLow]
    for (let i = 0; i < str.length; i++) {
        if([...sLow].slice(i + 1).includes(sArr[i])) {
            return false
        }
    }
    return true
}

// TODO
// !/(\w).*\1/i.test(str)

// new Set(str.toUpperCase()).size == str.length;
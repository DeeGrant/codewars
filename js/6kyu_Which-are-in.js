// https://www.codewars.com/kata/550554fd08b86f84fe000a58


function inArray(subStrings,words){
    let ret = []

    subStrings.forEach(subString => {
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(subString)){
                ret.push(subString)
                break
            }
        }
    })

    return ret.sort()
}
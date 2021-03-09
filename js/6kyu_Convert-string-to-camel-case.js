// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
    let words = str.split(/_|-/)

    let firstChar = /^./
    let retWords = words.map(word => word.replace(firstChar, fChar => fChar.toUpperCase()))
    retWords.shift()
    retWords.unshift(words[0])

    return retWords.join('')
}
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    const alph = {}
    for (let i = 0; i < 26; i++) {
        alph[String.fromCharCode('a'.charCodeAt(0) + i)] = i + 1
    }
    return text
        .toLowerCase()
        .replace(/[^\w]/gi, '')
        .split('')
        .filter(c => alph.hasOwnProperty(c))
        .map(c => alph[c])
        .join(' ')
}

//.match(/[\w]/gi) // null when nothing


// function alphabetPosition(text) {
//     return text
//         .toUpperCase()
//         .match(/[a-z]/gi) // null when no matches, breaks the map
//         .map(c => c.charCodeAt() - 64)
//         .join(' ')
// }
//
// function alphabetPosition(text) {
//     return text
//         .toLowerCase()
//         .match(/[a-z]/gi)// null when no matches, breaks the map
//         .map(c => c.charCodeAt() - 96)
//         .join(' ')
// }

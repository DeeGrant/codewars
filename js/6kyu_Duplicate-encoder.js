// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    return [...word.toLowerCase()]
        .map((l, i, w) => w.indexOf(l) === w.lastIndexOf(l) ? '(' : ')' )
        .join('')
}

// function duplicateEncode(word){
//     let lw = word.toLowerCase()
//     return [...lw]
//         .map((letter, i) => [...lw.slice(0, i), ...lw.slice(i+1)].includes(letter) ? ')' : '(' )
//         .join('')
// }

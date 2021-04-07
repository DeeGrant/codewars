// https://www.codewars.com/kata/55c45be3b2079eccff00010f

let order = (words) =>
    words
        .split(' ')
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(' ')


// function order(words){
//     let ret = []
//     let wArr = words.split(' ')
//     for (let i = 1; i <= wArr.length; i++) {
//         ret.push(...wArr.filter(word => word.includes(i)))
//     }
//     return ret.join(' ')
// }

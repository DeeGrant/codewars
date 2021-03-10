// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let noX = str.replace(/x/gi, '')
    let noO = str.replace(/o/gi, '')
    return noX.length === noO.length
}

// function XO(str) {
//     let x = 0
//     let o = 0
//     for (letter of str) {
//         switch (letter) {
//             case 'x':
//             case 'X':
//                 x++
//                 break
//             case 'o':
//             case 'O':
//                 o++
//                 break
//             default:
//                 break
//         }
//     }
//     // console.log(`X: ${x}, O: ${o} in ${str}`)
//     return x === o
// }

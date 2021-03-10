// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// function likes(names) {
//     let msg = 'no one'
//     let l = names.length
//     switch (l) {
//         case 0:
//             break
//         case 1:
//             msg = names[0]
//             break
//         case 2:
//             msg = `${names[0]} and ${names[1]}`
//             break
//         case 3:
//             msg = `${names[0]}, ${names[1]} and ${names[2]}`
//             break
//         default:
//             msg = `${names[0]}, ${names[1]} and ${l - 2} others`
//             break
//     }
//     return msg + ` like${l < 2 ? 's': ''} this`
// }

function likes(names) {
    let l = names.length
    return {
        0: 'no one',
        1: `${names[0]}`,
        2: `${names[0]} and ${names[1]}`,
        3: `${names[0]}, ${names[1]} and ${names[2]}`,
        4: `${names[0]}, ${names[1]} and ${l - 2} others`,
    }[Math.min(4, l)]
        + ` like${l < 2 ? 's': ''} this`
}
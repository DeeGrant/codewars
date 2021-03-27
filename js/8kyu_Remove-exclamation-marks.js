// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
    return s.replace(/\!/g, '') // removes all with g
}

// function removeExclamationMarks(s) {
//     return s.replaceAll(/\!/g, '')
// }

// No .replaceAll() allowed
// function removeExclamationMarks(s) {
//     while([...s].includes('!')) {
//         s = s.replace(/\!/g, '')
//     }
//     return s
// }


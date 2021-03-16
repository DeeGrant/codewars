// https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let n
    for (n = 0; p0 < p; n++)
        p0 = p0 * (1+percent/100) + aug
    return n
}

// function nbYear(p0, percent, aug, p) {
//     let pop = p0
//     let n = 0
//     while (pop < p) {
//         pop = pop * (1+percent/100) + aug
//         n++
//     }
//     return n
// }

// function nbYear(p0, percent, aug, p) {
//     // TODO rearrange the equation solving for 'n'
//     p = p0 * Math.pow((1+p/100),n) + aug * Math.pow((1+p/100),n-1)
// }
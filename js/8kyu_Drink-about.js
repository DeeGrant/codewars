// https://www.codewars.com/kata/56170e844da7c6f647000063

// function peopleWithAgeDrink(old) {
//     let drink = ''
//     if (old < 14) {
//         drink = 'toddy'
//     } else if (old < 18) {
//         drink = 'coke'
//     } else if (old < 21) {
//         drink = 'beer'
//     } else {
//         drink = 'whisky'
//     }
//
//     return `drink ${drink}`
// }

// cleaner solution
const peopleWithAgeDrink = (old) =>
    'drink ' + (
    old < 14 ? 'toddy' :
    old < 18 ? 'coke' :
    old < 21 ? 'beer' : 'whisky')
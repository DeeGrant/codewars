// https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

// Problem
// Given a list of developer objects, are all decades 10's to >100 represented?

// Return
// Boolean: true or false

// Pseudo Code


// Code
function isAgeDiverse(list) {
    const hasDecades = [1, 2, 3, 4, 5, 6, 7, 8, 9].every(num => list.some(dev => Math.floor(dev.age / 10) === num))
    // const hasCentenarian = !!list.filter(dev => dev.age >= 100).length
    const hasCentenarian = list.some(dev => dev.age >= 100)
    return hasDecades && hasCentenarian
}
// https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names

// Problem
// Given a list of developer objects, return a list of developers whose letter in their names
// sum to an odd number in ASCII

// Code
function findOddNames(list) {
    return list.filter(dev => dev.firstName.split('')
        .reduce((sum, letter) => sum + letter.charCodeAt(), 0)
        % 2 === 1
    )
}
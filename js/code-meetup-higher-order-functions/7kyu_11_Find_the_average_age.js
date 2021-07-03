// https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age

// Problem
// Given a list of developer objects, return the average oge of the developers.
// round to the nearest integer

// Code
function getAverageAge(list) {
    return Math.round(list.reduce((sum, dev) => sum + dev.age, 0) / list.length)
}
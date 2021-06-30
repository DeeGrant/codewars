// https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer

// Problem
// Given a list of developer objects, return the most senior developer(s)

// Code
function findSenior(list) {
    let ages = list.map(dev => dev.age)
    let maxAge = Math.max(...ages)
    return list.filter(dev => dev.age === maxAge)
}
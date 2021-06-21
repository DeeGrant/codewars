// https://www.codewars.com/kata/582746fa14b3892727000c4f

// Problem
// Given a list of Developer Objects, return the number of Developers whose language is 'JavaScript'
// and continent is 'Europe'

// Return
// an integer, the default should be 0

// Example
// list = [{language: 'Ruby', continent: 'Europe'}, {language: 'Javascript', continent: 'Europe'}] -> 1
// list = [{language: 'Ruby', continent: 'Europe'}, {language: 'Javascript', continent: 'China'}] -> 0

// Pseudo-Code
// list.filter
//     devObj.language === 'JavaScript' &&
//     devObj.continent === 'Europe'
//   .length

// Code
function countDevelopers(list) {
    return list.filter(dev =>
        dev.language === 'JavaScript' &&
        dev.continent === 'Europe'
    ).length
}
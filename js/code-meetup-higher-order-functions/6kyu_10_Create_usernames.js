// https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames

// Problem
// Given a list of developer objects, add a 'username' property

// Example
// the username should follow:
//   firstName + first letter of lastName + birth year
// all lower case
// birth year:
//   current year(dynamic) - dev.age


// Code
function addUsername(list) {
    const year = new Date().getFullYear()
    list.forEach(dev => dev.username = (dev.firstName + dev.lastName[0]).toLowerCase() + (year - dev.age))
    return list
}
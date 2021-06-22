// https://www.codewars.com/kata/58279e13c983ca4a2a00002a

// Problem
// Given a list of developer objects, add a property 'greeting' with a customized greeting on to each developer

// Return
// a list of:
//   devs
//     with dev.greeting = "Hi {dev.firstName}, what do you like the most about {dev.language}?"

// Example

// Poor inputs? - No

// Pseudo Code
// list.forEach(dev => dev.greeting = 'string literal')
// return list

// Code
function greetDevelopers(list) {
    list.forEach(dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`)
    return list
}
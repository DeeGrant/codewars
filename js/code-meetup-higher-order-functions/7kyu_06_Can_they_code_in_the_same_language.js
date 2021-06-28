// https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language

// Problem
// Given a list of developer objects, return true if the all have the same language, otherwise false

// Code
function isSameLanguage(list) {
    return list.every(dev => dev.language === list[0].language)
}
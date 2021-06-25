// https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages

// Problem
// Given a list of developer objects, return an object with the developer count for each language

// Example
//   [
//     {language: 'C'},
//     {language: 'Ruby'},
//     {language: 'C'},
//   ]
//     =>
//   {C: 2, Ruby: 1}

// Code
function countLanguages(list) {
    let ret = {}
    list.forEach(dev => {
        let count = ret[dev.language]
        ret[dev.language] = count ? ++count : 1
    })
    return ret
}
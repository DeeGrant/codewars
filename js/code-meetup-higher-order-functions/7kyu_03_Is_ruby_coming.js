// https://www.codewars.com/kata/5827acd5f524dd029d0005a4

// Problem
// Given a list of developer objects, return true if any developer's language is 'Ruby'

// Code
function isRubyComing(list) {
    return list.some(dev => dev.language === 'Ruby')
}
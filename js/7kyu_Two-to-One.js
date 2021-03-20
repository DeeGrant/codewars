// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

let _ = require('underscore')

function longest(s1, s2) {
    return _.uniq([...(s1 + s2)].sort()).join('')
}

// No external module
// return [...new Set(s1+s2)].sort().join('')
// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length
}

// var countBits = function(n) {
//     let ret = n.toString(2).match(/1/g)
//     return ret === null ? 0 : ret.length
// }

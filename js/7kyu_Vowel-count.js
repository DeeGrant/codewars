// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    for( letter of [...str]) {
        vowelsCount += vowels.includes(letter) ? 1 : 0
    }
    return vowelsCount;
}

// clever answer
// function getCount(str) {
//     return (str.match(/[aeiou]/ig) || []).length;
// }
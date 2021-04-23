// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
    return arr.filter(face => /^[:;][-~]?[)D]$/.test(face)).length
}

// return arr.reduce((a, f) => /^[:;][-~]?[)D]$/.test(f) ? ++a : a, 0)
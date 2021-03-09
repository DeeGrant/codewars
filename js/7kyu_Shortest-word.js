// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
    return Math.min(...s.split(' ').map(w => w.length))
}

// function findShort(s){
//     return s.split(' ').reduce((a, w) => a > w.length ? w.length : a, Number.MAX_VALUE)
// }

// function findShort(s){
//     return Math.min.apply(this, s.split(' ').map(w => w.length))
// }
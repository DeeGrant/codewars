// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    return [...s.toLowerCase()]
        .map((l,index) => l.toUpperCase() + l.repeat(index))
        .join('-')
}

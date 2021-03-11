// https://www.codewars.com/kata/59a8570b570190d313000037

function sumCubes(n){
    return Array.from({length: n}, (_,i) => ++i)
        .reduce((sum, n) => sum + Math.pow(n, 3), 0)
}

// Smart answer
// function sumCubes(n){
//     return Math.pow(n*(n+1)/2, 3)
// }
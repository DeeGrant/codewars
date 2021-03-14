// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    return n < 10 ? n : digital_root([...n.toString()].reduce((sum, s) => sum + parseInt(s), 0))
}

// TODO
// function digital_root(n) {
//     return (n - 1) % 9 + 1;
// }
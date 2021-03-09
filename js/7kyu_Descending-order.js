// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
    return parseInt([...n.toString()].sort().reverse().join(''), 10)
}
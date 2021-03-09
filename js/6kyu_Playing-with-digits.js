// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p){
    let algNum = [...n.toString()]
        .map(s => parseInt(s)) //numArr
        .reduce((a, n, index) => a + n ** (p + index), 0)
    let ret = algNum / n
    return Number.isInteger(ret) ? ret : -1
}
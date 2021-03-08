// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

multiplicationTable = function(size) {
    let ret = []
    for( let i = 1; i <= size; i++) {
        let row = []
        for (let j = 1; j <= size; j++) {
            row.push(i * j)
        }
        ret.push(row)
    }
    return ret
}


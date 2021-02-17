function towerBuilder(nFloors) {
    let ret = []
    for(let i = nFloors; i--;) {
        let rowNum = i + 1
        let space = ' '.repeat(nFloors - rowNum)
        let tower = '*'.repeat(2 * rowNum - 1)
        ret.unshift(space + tower + space)
    }
    return ret
}

// tests
console.log(towerBuilder(5))
// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){
    if (!array1 || !array2) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        let sqr = Math.pow(array1[i], 2)
        if (array2.includes(sqr)) {
            let index = array2.indexOf(sqr)
            array2.splice(index, 1)
        } else {
            return false
        }
    }
    return array2.length === 0
}

// TODO
// function comp(a, b) {
//     return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
// }
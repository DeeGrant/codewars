// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

function findOdd(A) {
    let count = {
        findOdd: function() {
            for (const prop in this) {
                // console.log(prop)
                if(this[prop] % 2 === 1) {
                    return parseInt(prop)
                }
            }
        }
    }

    A.forEach(num => count[num] = count[num] ? count[num]+1 : 1)

    return count.findOdd()
}
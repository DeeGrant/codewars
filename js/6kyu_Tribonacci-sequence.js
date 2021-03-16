// https://www.codewars.com/kata/556deca17c58da83c00002db

// more concise
// function tribonacci(signature,n){
//     for (var i = 0; i < n-3; i++) { // iterate n - 3 times
//         signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); //return trib - length of n
// }


function tribonacci(signature,n){
    let ret = []
    for (let i = 0; i < n; i++) {
        switch (i) {
            case 0:
                ret.push(signature[0])
                break
            case 1:
                ret.push(signature[1])
                break
            case 2:
                ret.push(signature[2])
                break
            default:
                let sum = ret[i-1] + ret[i-2] + ret[i-3]
                ret.push(sum)
                break
        }
    }
    return ret
}



// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    let match = s.match(/[n-z]/g)
    return `${match ? match.length : 0}/${s.length}`
}


// more succinct
// function printerError(s) {
//     // let r = s.replace(/[a-m]/gi, '')
//     // console.log(r)
//     return `${s.replace(/[a-m]/gi, '').length}/${s.length}`
// }

// Tests
// Test.describe("printerError",function() {
//     Test.it("Basic tests",function() {
//         var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//         Test.assertEquals(printerError(s), "3/56")
//         Test.assertEquals(printerError("aaaa"), "0/4")
//     })})
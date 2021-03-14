// https://www.codewars.com/kata/58cb43f4256836ed95000f97

function findDifference(a, b) {
    return Math.abs(a.reduce((vol, d) => vol * d, 1) -  b.reduce((vol, d) => vol * d, 1))
}

// https://www.codewars.com/kata/555eded1ad94b00403000071


function SeriesSum(n)
{
    if (n === 0) return '0.00'
    if (n === 1) return '1.00'

    let sum = 0.00
    for (let i = 2; i <= n; i++) {
        sum += 1.00 / (1.00 + 3.00 * (i - 1))
    }

    return (1.00 + sum).toFixed(2)
}




// rounding each return throws off the expected return
// function SeriesSum(n)
// {
//     console.log(n)
//     if (n === 0) return '0.00'
//     if (n === 1) return '1.00'
//
//     return parseFloat(1.00 / (1.00 + 3.00 * (n - 1)) + parseFloat(SeriesSum(n - 1)))
//         .toFixed(2)
// }
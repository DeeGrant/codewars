// https://www.codewars.com/kata/554a44516729e4d80b000012

// Problem
// How many months will it take to save up enough money to by the new car?
// How much money will be left over after purchase?

// Declarations and assumptions
// startPriceOld - currently has a car
// startPriceNew - desired car cost
// savingsPerMonth - how much money saved per month
// percentLosByMonth - monthly depreciation of both vehicles
//
// depreciation increases by 0.5 every 2 months
//
// all inputs
// positive ints or floats
// guaranteed

// output
// an array
// position 0 - number of months
// position 1 - money left over
//      round to nearest integer

// Rephrased Problem
// At what month is the equation output positive?

// Examples
// 1, 10, 3, 10.0
// Month 1, rate 10.0     (3 + .9) - 9 = -5.1
// Month 2, rate 10.0     (6 + .81) -8.1 = -1.29
// Month 3, rate 10.5     (9 + .72495) - 7.2495 = 2.475...
// return [3, 2]

// Code
// Equation
//      (n * savingsPerMonth + currentCarValue[lastMonth] * currentDepreciationRate) - desiredCareValue[lastMonth] * currentDepreciationRate
//      n - number of months
//      currentDepreciationRate - (currentDepreciationPercent / 100) - increase by .005 after even months
//

function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth){
    let balance = startPriceOld - startPriceNew
    let oldPrice = startPriceOld
    let newPrice = startPriceNew
    let month = 0
    let rate = 1 - percentLossByMonth / 100.0

    while(balance < 0) {
        month++
        if (month % 2 === 0) {
            rate -= 0.005
        }
        oldPrice *= rate
        newPrice *= rate

        balance = month * savingsPerMonth + oldPrice - newPrice
        // console.log(month, rate, oldPrice, newPrice, balance)
    }
    return [month, Math.round(balance)]

}
// https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented

// Problem
// Given a list of developer objects, are all 'continents' represented?
// 'continents'
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'

// Return
// Boolean: true / false

// Pseudo Code
// count object with properties for each continent
// populate the count for each continent
// iterate through properties and if any under 1 -> return false
// else return true

// Code
function allContinents(list) {
    let count = {
        Africa: 0,
        Americas: 0,
        Asia: 0,
        Europe: 0,
        Oceania: 0,
    }

    list.forEach(dev => {
        count[dev.continent]++
    })

    for (const continent in count) {
        if (count[continent] < 1) return false
    }

    return true
}

// Code 2
function allContinents2(list) {
    return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
        .every(continent => list.some(dev => dev.continent === continent))
}

// Code 3
// assumes no invalid data
function allContinents3(list) {
    return new Set(list.map(dev => dev.continent)).size === 5
}
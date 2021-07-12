// https://www.codewars.com/kata/coding-meetup-number-17-higher-order-functions-series-sort-by-programming-language

// Problem
// Given a list of developer objects, return a list sorted, a-z, by language.
//  sort by first name if they have the same language.

// Code
function sortByLanguage(list) {
    return list.sort((a, b) => {
        if (a.language < b.language) return -1
        if (a.language > b.language) return 1
        if (a.firstName < b.firstName) return -1
        if (a.firstName > b.firstName) return 1
        return 0
    })
}

// Code 2
function sortByLanguage2(list) {
    return list.sort((a, b) => {
        const sort = a.language.localeCompare(b.language)
        return sort === 0 ? a.firstName.localeCompare(b.firstName) : sort
    })
}

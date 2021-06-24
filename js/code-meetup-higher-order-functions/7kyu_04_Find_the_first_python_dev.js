// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

// Problem
// Given a list of developer objects, return the first python developer

// Return
//   if found
//     `dev.firstName, dev.country`
//   else
//     'There will be no Python developers'

// Code
function getFirstPython(list) {
    let pDev = list.find(dev => dev.language === 'Python')
    return pDev.length ? `${pDev.firstName}, ${pDev.country}` : 'There will be no Python developers'
}
// https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse

// Problem
// Given a list of developer objects,
// Return
//   true
//     the number of developers with any language is
//       at most 2 * the developers of either one of the remaining languages
//  false
//      otherwise


// Pseudo Code
// get the count of each language
// find the max and min
// return if the (max / min) in <= 2

// Code
function isLanguageDiverse(list) {
    const table = {
        JavaScript: 0,
        Ruby: 0,
        Python: 0
    }
    list.forEach(dev => table[dev.language]++)

    const counts = Object.values(table)
    return (Math.max(...counts) / Math.min(...counts)) <= 2
}

// Code 2
function isLanguageDiverse2(list) {
    const table = list.reduce((count, {language}) => ({
        ...count,
        [language]: (count[language] || 0) + 1
    }), {})

    const counts = Object.values(table)
    return (Math.max(...counts) / Math.min(...counts)) <= 2
}

// Code 3
function isLanguageDiverse3(list) {
    const languages = list.map(dev => dev.language)
    const counts = [...new Set(languages)]
        .map(setLang => languages.filter(lang => lang === setLang).length)

    return (Math.max(...counts) / Math.min(...counts)) <= 2
}
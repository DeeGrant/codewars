// https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins

// Problem
// Given a list of developer objects, return a list of developers who are github admins for a specific language

// Code
function findAdmin(list, lang) {
    return list.filter(dev => dev.githubAdmin === 'yes' && dev.language === lang)
}
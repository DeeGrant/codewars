// https://www.codewars.com/kata/55b42574ff091733d900002f

// Problem
// Filter a list of people to just your friends

// Assumption
// given an array of strings
// my friends only have four letter names
// return an array of strings

// Exaples
// ['Joe', 'Suse', 'Brad'] -> ['Suse', 'Brad']
// ['Joe'] -> []
// ['Suse'] -> ['Suse']

// Code
// namesList
// .filter()
//      name.length === 4
// return resulting array

function friend(friends){
    return friends.filter(name => name.length === 4)
}
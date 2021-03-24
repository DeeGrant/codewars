// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// Problem
// Validate a PIN code
//    must be 4 or 6 numbers
// return true or false

// Assumptions
// input String
// return Boolean

// Examples
// '' -> false
// '123456' -> true
// '-123' -> false
// '-1234' -> false
// '-1234.' -> false
// '1234.5' -> false

// Code
// input string
// if(check length is 4 || 6)
//      try to parse to an Integer
//      Successful parse
//            return true
//      failed parse
//            return false
// else
//    return false

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
    // return (pin.length === 4 || pin.length === 6) && !pin.match(/\D/g)
}
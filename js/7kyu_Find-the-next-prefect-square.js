// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// Problem
// given an integer, determine if it is a perfect square (square is an integer).
// If it is a perfect square, return the next perfect square (higher vaule).
// If not, return -1

// Assumptions
// input - single integer, never negative
// output - single integer

// Examples
// -> 9 -> 3 -> 4 -> return 16
// -> 0 -> 0 -> 1 -> return 1
// -> 3 -> ~1.7... -> return -1

// Code
// Get the square root of input
// Determine if it is an integer
// If (Integer)
//      return squareOf(square root ++)
// Else
//      return -1

function findNextSquare(sq) {
    let root = Math.sqrt(sq);
    return root % 1 ? -1 : Math.pow(++root, 2)
    // return root % 1 === 0 ? Math.pow(++root, 2) : -1

}

// Number.isInteger(root)
// ++root ** 2
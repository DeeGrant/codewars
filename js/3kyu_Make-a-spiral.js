// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

// Problem
// Given N, create a N x N spiral of zeros.
// 'blank' space is denoted by zero, 0
// the spiral is denoted by one, 1
// n will always be > 5

// Returns
// Given an integer -> return a 2D array filled with integers 0 and 1

// Examples
// 5 ->
//     [[1, 1, 1, 1, 1],
//      [0, 0, 0, 0, 1],
//      [1, 1, 1, 0, 1],
//      [1, 0, 0, 0, 1],
//      [1, 1, 1, 1, 1]]


// Code
function spiralize (n) {
    const spiral = Array(n).fill().map(() => Array(n).fill(0))
    let i = 0
    let j = 0

    // Movement step values
    let d_i = 0
    let d_j = 1

    let rotated = 0

    // Spiral will only make n-1 turns
    while (rotated < n) {
        console.log('set index', i, j)
        spiral[i][j] = 1

        // Determine if move 'forward' or turn
        let move = can_move(spiral, i, j, d_i, d_j)
        console.log('\tcan_move', move)
        if (move) {
            // Move
            i += d_i
            j += d_j
            console.log('moved index to', i, j)
            console.log('')
        } else {
            rotated += 1
            // Rotate move direction clockwise
            let temp = d_i
            d_i = d_j
            d_j = temp * (rotated % 2 === 0 ? -1 : 1)
            console.log('rotation', rotated)
            console.log('  new vectors', 'd_i', d_i, 'd_j', d_j)
            console.log('')
        }
    }

    console.log(spiral)
    return spiral;
}

function can_move(spiral, i, j, d_i, d_j) {
    let n = spiral.length

    // Move
    i += d_i
    j += d_j
    console.log('\tmove_index', i, j)

    // Stay in array
    if (i < 0 || i >= n || j < 0 || j >= n) {
        console.log('\tout of bounds')
        return false
    }

    // Already occupied
    if (spiral[i][j] === 1) {
        console.log('\talready occupied')
        return false
    }

    // Move second space
    i += d_i
    j += d_j
    console.log('\t2nd_move_index', i, j)

    // avoid out of bounds index in next check
    if (i < 0 || i >= n || j < 0 || j >= n) {
        console.log('\t\tbounds dont matter')
        return true
    }

    // Second space can't be occupied
    if (spiral[i][j] === 1) {
        console.log('\t\ttoo close to occupied')
        return false
    }

    return true
}

// console.log(spiralize(5))
console.log(spiralize(10))
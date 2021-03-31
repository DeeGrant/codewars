// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

// Problem
// Given an n x n array.
// Start at 0 x 0
// Traverse the array in a clock-wise direction
// land on each element once
// return an array of the elements traversed, in the order traversed

// Example
// [[1, 2],
// [3, 4]]
// -> [1, 2, 4, 3]

// Code
// x_start, y_start index = 0, 0
// x_end, y_end index = n, n
// x ->
// y v
// start
// -> update y_start++
// v  update x_end--
// <- update y_end--
// ^  update x_start++
//
// test x_start === x_end && y_start === y_end
//      finish traversing matrix
// ------------
// need a loop that can change direction?
// switch case for direction of traversing {e, s, w, n}
//      loop in each case
//      update start/end, next traverse direction
//
// continue check
//
// return array if not continue
//
// feels like a very verbose solution...
//      generic function for matrix traverse
//          has the for loop in it
//          inputs x and y start and stop
//          output array of traversed elements

// TODO: attempt more succinct solution. ex. slice

class Compass {
    constructor(firstDirection) {
        this._current_direction = firstDirection.toLowerCase()
        this._rotationOrder = { e: 's', s: 'w', w: 'n', n: 'e'}
    }
    nextDirection() {
        this._current_direction = this._rotationOrder[this._current_direction]
    }
    direction() {
        return this._current_direction
    }
}

snail = function(array) {
    let ret = []
    let x_start = 0
    let y_start = 0
    let x_end = array[0].length-1
    let y_end = array.length-1
    let spiral = new Compass('e')

    while (x_start <= x_end && y_start <= y_end) {
        // console.log(`${spiral.direction()} ret:${ret}`)
        switch (spiral.direction()) {
            case 'e':
                for (let x = x_start; x <= x_end; x++) {
                    ret.push(array[y_start][x])
                }
                y_start++
                break
            case 's':
                for (let y = y_start; y <= y_end; y++ ) {
                    ret.push(array[y][x_end])
                }
                x_end--
                break
            case 'w':
                for (let x = x_end; x >= x_start; x--) {
                    ret.push(array[y_end][x])
                }
                y_end--
                break
            case 'n':
                for (let y = y_end; y >= y_start; y-- ) {
                    ret.push(array[y][x_start])
                }
                x_start++
                break
        }
        // console.log(`${spiral.direction()} ret:${ret}`)
        spiral.nextDirection()
    }
    return ret
}
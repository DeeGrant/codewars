// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912

function pyramid(balls) {
    let layer = 0
    for (let i = balls; i >= 0;) {
        layer++
        i -= layer
    }
    return --layer
}


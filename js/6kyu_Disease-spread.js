// https://www.codewars.com/kata/566543703c72200f0b0000c9

// Problem
// An influenza outbreak takes place in a boarding school with 1000 students. What is the maximum infected,
// at the same time, during tm?

// Assumption
// S0, the initial number of healthy students
//      integer
// I0, the initial number of infected students
//      integer
// R0, the initial recovered
//      0
// tm, the time from the first infection
//      integer
// n, the number of infection intervals in tm
//      integer
// b, disease spread constant
//      float
// a, infected recovery ratio
//      float

// return the maximum I during 0 to tm (rounded down)

// Equations
// S'(t) = -b * S(t) * I(t)
// I'(t) = b * S(t) * I(t) - a * I(t)
// R'(t) = a * I(t)

// s[tn+1] = s[tn] - dt * b * s[tn] * i[tn]
// i[tn+1] = i[tn] + dt * (b * s[tn] * i[tn] - a * i[tn])
// r[tn+1] = r[tn] + dt * a * i[tn]

// Code
// initialize arrays for S, I, and R with their initial values
// create a for loop that will iterate n times
//      within the for loop push the next value onto each array (S, I, R)
// after the loop return Math.max(I).toFixed(0) or Math.floor(Math.max(I))

function epidemic(tm, n, s0, i0, b, a) {
    const s = [s0]
    const i = [i0]
    const r = [0]
    const dt = tm / n

    for (let tn = 0; tn < n; tn++) {
        let newInfected = dt * b * s[tn] * i[tn]
        let newRecovered = dt * a * i[tn]
        // console.log(`Interval${tn}:  New Infected: ${newInfected}  New Recovered: ${newRecovered}`)

        s.push(s[tn] - newInfected)
        i.push(i[tn] + newInfected - newRecovered)
        r.push(r[tn] + newRecovered)
    }

    return Math.floor(Math.max(...i))
}
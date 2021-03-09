// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    let tills = new Array(n).fill(0)
    // console.log(tills)

    customers.forEach(c => {
        let shortestTime = Math.min(...tills)
        let openTill = tills.indexOf(shortestTime)
        // console.log(`Customer: ${c} is waiting for till ${openTill} at Time: ${shortestTime}.   [${tills}]`)
        tills[openTill] += c
    })

    return Math.max(...tills)
}
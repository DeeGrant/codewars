// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/javascript

// Note: I initially missed what the question was asking :/

// Problem
// Given a list of bills, will Vasya be able to give everyone change?

// Definitions & Assumptions
// Vasyas starts with 0 in the till
// Tickets cost 25 per person
//      tickets are bought one at a time
// Input: an array of integers
// Return: 'YES' or 'NO'

// Examples
// [50] -> NO
// [25, 25, 25, 100] -> YES
// [25, 25, 25, 100, 50] -> NO

// Code
// till = 0
// ForEach Bill in Queue
// if (they do need change)
//      change = bill - ticketPrice (25)
//      till += bill
//      till -= change
//      if(till is negative)
//          return 'NO'
// else
//      till += ticketPrice
// return 'YES

// Revise
// correction keep track of specific bills in the till
// till = [0, 0, 0]


function tickets(peopleInLine){
    let till = [0, 0, 0]
    for (let bill of peopleInLine) {
        // console.log(`in till: ${till}  for bill ${bill}`)
        switch (bill) {
            case 25:
                till[0]++
                break
            case 50:
                till[1]++
                till[0]--
                break
            case 100:
                till[2]++
                till[1] > 0 ? till[1]-- : till[0] -= 2
                till[0]--
                break
        }
        if (till.some(b => b < 0)) {
            return 'NO'
        }
    }
    return 'YES'
}





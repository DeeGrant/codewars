// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

// function movie(card, ticket, perc) {
//     let ticketTotal = 0
//     let cardTotal = card
//     let n = 0
//     while (ticketTotal <= Math.ceil(cardTotal)) {
//         n++
//         ticketTotal += ticket
//         cardTotal += ticket * Math.pow(perc, n)
//     }
//     return n
// }

// little more succinct
function movie(card, ticket, perc) {
    let n = 0
    while (ticket * n <= Math.ceil(card)) {
        n++
        card += ticket * Math.pow(perc, n)
    }
    return n
}
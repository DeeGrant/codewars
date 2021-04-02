// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript


// function bounceDecay(h, bounce, window) {
//     let count = 1
//     while ((h * bounce) > window) {
//         count+=2
//         h = h * bounce
//     }
//     return count
// }
//
// let bouncingBall = (h,  bounce,  window) =>
//      (h > window && bounce > 0 && bounce < 1) ?
//         bounceDecay(h, bounce, window) :
//         -1


// More concise

function bouncingBall(h, bounce, window) {
    let rebounds = -1
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h*=bounce
    return rebounds
}

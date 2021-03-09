// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
    let count = {}
    return arr.filter((num) => {
        count[num] = count[num] ? count[num] + 1 : 1
        // console.log(`${num}: count is ${count[num]}`)
        return !(count[num] > n)
    })
}
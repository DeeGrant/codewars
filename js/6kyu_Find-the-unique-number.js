// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    let unique = arr.filter((num, index) => arr.indexOf(num) === index)
    return arr.filter(num => num === unique[0]).length === 1 ? unique[0] : unique[1]
}

// more succinct
function findUniq2(arr) {
    return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
}

// clever
function findUniq3(arr) {
    arr.sort((a,b) => a-b);
    return arr[0] === arr[1] ? arr.pop() : arr[0]
}

findUniq([1,0,0])
findUniq([0,1,0])
findUniq([1,1,1,1,2,1,1])
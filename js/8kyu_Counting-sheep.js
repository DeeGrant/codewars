// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
    // return arrayOfSheep.reduce((acc, b) => b ? ++acc: acc, 0)
}
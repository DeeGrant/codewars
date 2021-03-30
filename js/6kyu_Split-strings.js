// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

// Problem
// Split a string into an array of character pairs

// Definitions & Assumption
// input -> String
// output -> Array ['ab', 'cd', 'ef']
// if the string is an odd length, fill last char with _

// Examples
// 'abc' -> ['ab', 'c_']
// '1234' -> ['12', '34']

// Code
// Spread string into an array of characters
// map or reduce? - probably reduce or filter map afterwards
//      if( index is even)
//          let subString = char[currentIndex]
//          test - if string is odd && index is last index
//              need to add _ to character at subString
//          else
//              add index + 1 character to subString
//          return subString
//      else
//          do nothing - (maybe have to use a filter instead?)
//
// return reduced Array

// my solution
function solution1(str){
    const isOdd = str.length % 2
    const lastIndex = str.length - 1
    return [...str].reduce((ret, c, i, arr) => {
        // console.log(`Ret: ${ret}   char: ${c}    index: ${i}    arr: ${arr}`)
        if (i % 2 === 0) {
            ret.push(c + (isOdd && i === lastIndex ? '_' : arr[i+1]))
        }
        return ret
    }, [])
}

// Smart solution
function solution(str){
    return (str+'_').match(/.{2}/g) || []
    // return (str+'_').match(/.{2}/g) ?? [] // ES2020
}

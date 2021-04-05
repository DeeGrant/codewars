// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(s){
    return s.split(' ').map(word => word.length >= 5 ? [...word].reverse().join('') : word).join(' ')
}


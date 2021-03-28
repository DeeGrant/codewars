// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    // return data.map(member => member[0] > 54 && member[1] > 7 ? 'Senior' : 'Open')
    return data.map(([age, handicap]) => age > 54 && handicap > 7 ? 'Senior' : 'Open')
}
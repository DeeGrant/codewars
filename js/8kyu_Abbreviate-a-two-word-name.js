// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    return name.split(' ').map(word => word.charAt(0)).join('.').toUpperCase()
}
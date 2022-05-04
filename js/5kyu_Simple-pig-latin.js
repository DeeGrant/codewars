// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
    return str.split(' ').map(word => {
        if ('.,?!'.split('').includes(word)) return word

        let letters = word.split('')
        letters.push(letters.shift())
        letters.push('ay')
        return letters.join('')
    }).join(' ')
}

pigIt('Pig latin is cool')
pigIt('Hello world !')

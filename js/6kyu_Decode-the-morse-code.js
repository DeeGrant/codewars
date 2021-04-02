// https://www.codewars.com/kata/54b724efac3d5402db00065e

decodeMorse = (morseCode) =>
    morseCode
        .split('   ')
        .map(word =>
            word.split(' ')
                .map(mChar => MORSE_CODE[mChar])
                .join(''))
        .join(' ')
        .trim()

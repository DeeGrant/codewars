// https://www.codewars.com/kata/52724507b149fa120600031d

function generateHundredsString(ones, tens = 0, hundreds = 0) {
    // doesn't handle 0 -> zero
    const oneTeen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let tenString = ''
    if (tens === 1) {
        tenString = oneTeen[[tens, ones].join('')]
    } else {
        let oneString = oneTeen[ones]
        let tempTenString = tensArr[tens]
        tenString = `${tempTenString}${tempTenString && oneString ? '-' : ''}${oneString}`
    }
    let hundString = oneTeen[hundreds]

    return `${hundString}${hundString ? ' hundred' : ''}${hundString && tenString ? ' ' : ''}${tenString}`
}

function number2words(n){
    // works for numbers between 0 and 999999
    let numArr = [...n.toString()].map(s => parseInt(s, 10)).reverse()

    let hundreds = ''
    let thousands = ''
    switch (numArr.length) {
        case 6:
        case 5:
        case 4:
            let hArr = [numArr.shift(), numArr.shift(), numArr.shift()]
            hundreds = generateHundredsString(...hArr)
            thousands = generateHundredsString(...numArr)
            break
        case 3:
        case 2:
        case 1:
            hundreds = generateHundredsString(...numArr)
            break
    }

    let ret = `${thousands}${thousands ? ' thousand' : ''}${thousands && hundreds ? ' ' : ''}${hundreds}`
    return ret ? ret : 'zero'
}

// TODO try more succinct answer
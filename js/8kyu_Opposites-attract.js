// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2){
    return [flower1, flower2].filter(petals => petals % 2 === 0).length === 1
}

// far more concise
// return (flower1 + flower2) % 2 === 1

// return flower1 % 2 !== flower2 % 2
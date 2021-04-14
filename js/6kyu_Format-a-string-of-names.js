// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
    return names
        .map(obj => obj.name)
        .reduce((accum, name, index, arr) => {
            switch (index) {
                case 0:
                    return name
                case arr.length - 1:
                    return `${accum} & ${name}`
                default:
                    return `${accum}, ${name}`
            }
        }, '')
}


// TODO look into these answers

// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
// }
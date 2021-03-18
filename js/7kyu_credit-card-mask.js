// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
    let ret = Array(cc.length).fill('#')
    ret.splice(-4, 4, [...cc].slice(-4).join(''))
    return ret.join('')
}


// better solutions
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//     return cc.replace(/.(?=....)/g, '#');
//     return cc.replace(/.(?=.{4})/g, "#");

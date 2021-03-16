// https://www.codewars.com/kata/551dc350bf4e526099000ae5

function songDecoder(song){
    return song.split('WUB').filter(word => word !== '').join(' ')
}


// clever
//     return song.replace(/(WUB)+/g," ").trim()
//     return song.split('WUB').filter(Boolean).join(' ')
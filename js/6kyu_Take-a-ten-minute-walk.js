// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {

    if(walk.length !== 10) {
        return false
    }

    let coor = [0,0]

    walk.forEach(direction => {
        switch(direction) {
            case 'n':
                coor[1] += 1
                break
            case 'e':
                coor[0] += 1
                break
            case 's':
                coor[1] -= 1
                break
            case 'w':
                coor[0] -= 1
                break
        }
    })

    return coor[0] === 0 && coor[1] === 0
}
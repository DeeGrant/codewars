// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s)
{
    let strLength = s.length
    return strLength % 2 ?
        s[(strLength - 1) / 2]
        :
        s[(strLength / 2) - 1] + s[(strLength) / 2]
}

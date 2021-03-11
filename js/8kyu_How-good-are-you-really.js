// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((sum, points) => sum + points, 0) / classPoints.length < yourPoints
}

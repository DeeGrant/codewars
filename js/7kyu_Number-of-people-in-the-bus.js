// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = (busStops) => busStops.reduce((bus, stop) => bus + stop[0] - stop[1], 0)
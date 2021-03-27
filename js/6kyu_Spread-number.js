// https://www.codewars.com/kata/5cbded7a36240b000dac91eb

// TODO: Reading

// https://www.codewars.com/kata/reviews/5cc01e92e0e3e00001d7af56/groups/5ccb7312739fc50001a88697
// The spread operator only works on iteratable objects, so we need to make Number iteratable.
Number.prototype[Symbol.iterator] = function* () {
    let i = 0;
    while (i < this) yield ++i;
}

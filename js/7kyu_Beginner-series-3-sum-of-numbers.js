// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum( a,b )
{
    return a === b ?
        a :
        Array
            .from({length: (Math.max(a,b) - Math.min(a,b)) + 1}, (_,i) => Math.min(a,b) + i)
            .reduce((sum, num) => sum + num, 0)
}

// TODO
// (max - min + 1)(max + min) / 2
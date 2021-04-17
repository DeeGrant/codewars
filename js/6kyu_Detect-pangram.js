// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

let isPangram = (string) => new Set(string.toLowerCase().replace(/[^a-z]/gi, '')).size === 26

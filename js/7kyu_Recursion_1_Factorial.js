// https://discord.com/channels/735923219315425401/862401027793879060/921515951093084200

const factorial = n => {
    if (n > 1)
        return n * factorial(n-1)
    return 1
}


console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

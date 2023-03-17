let somaRes = function soma(n1 = 0, n2 = 0 ) {
    return n1+n2
}

let func =function parImpar(n) {
    if (n%2 == 0) {
        return `Par!`
    }else {
        return `Ímpar!`
    }
}
n = somaRes(2, 4)

console.log(`Os numeros número ${n}, é ${func(n)}`)
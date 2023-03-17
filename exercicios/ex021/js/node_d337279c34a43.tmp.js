// Crie uma Função que calcula o Fatorial de um Número
// !5 = 5 * 4 * 3 * 2 * 1 = 120

function fatorial(n) {
    for(let c = n-1; c > 1; c--) {
        n *= c
    }  return n
}

// console.log(fatorial(6))

function infinito() {
    for(let x = 0; true; x++) {
        console.log(x)
    }
}

infinito()
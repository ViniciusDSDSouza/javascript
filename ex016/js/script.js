var whilE = 1
var dO = 1
// Mesmos Resultados

// Pior maneira
console.log('Contador: 1')
console.log('Contador: 2')
console.log('Contador: 3')
console.log('Contador: 4')
console.log('Contador: 5\n')

// Testa, depois Executa
while (whilE <=5) {
    console.log(`Contador: ${whilE}`)
    whilE++
}

console.log('')

// Executa, depois Testa
do {
    console.log(`Contador: ${dO}`)
    dO++
} while (dO <= 5)
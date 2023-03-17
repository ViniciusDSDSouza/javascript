// Array
let num = [5, 8, 4]

// Object
let amigo = {
    nome: 'José', 
    sexo: `m`,
    peso: 85.4,
    engordou(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)

amigo.engordou(8)

console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)
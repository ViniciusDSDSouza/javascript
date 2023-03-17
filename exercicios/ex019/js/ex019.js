let num = [4,7,9,2]
num.push(5)

console.log(`A array é: [${num}]`)
console.log(`Agora a array é [${num}]`)
console.log(`A array possui [${num.length}] elementos`)
console.log(`O 3° elemento é [${num[2]}]`)
console.log(`A array em ordem númerica ficaria: [${num.sort()}]`)

num.sort()

// Sem loop
/*console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])*/

// Com Loop
/*for (var c = 0; c < num.length; c++) {
    console.log(`A posição [${c}] tem o valor ${num[c]}`)
}*/

// Com Loop Simplificado

for (var c in num) {
    console.log(`A posição [${c}] possui ${num[c]}`)
}

console.log(num.indexOf(7))

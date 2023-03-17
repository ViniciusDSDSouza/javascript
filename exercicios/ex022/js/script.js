const nmrtxt = document.getElementById('nmr')
const btnAdicionar = document.getElementById('add')
const btnFinalizar = document.getElementById('finalizar')
const cadastros = document.getElementById('cadastros')
const pMaiorN = document.getElementById('maiorN')
const pMenorN = document.getElementById('menorN')
const soma = document.getElementById('Soma')
const Media = document.getElementById('media')
const p = document.getElementById('divP')

let valores = []
let maiorN
let menorN
let somaN = 0
let media

btnAdicionar.addEventListener('click', adicionar)
btnFinalizar.addEventListener('click', finalizar)

function adicionar() {
    if (nmrtxt.value == '' || Number(nmrtxt.value) < 1 || Number(nmrtxt.value) > 100) {
        alert('[erro] Adicione um número válido!')
        } else {
        let nmr = Number(nmrtxt.value)
        if (valores.indexOf(nmr) != -1) {
            alert('Você ja adicionou este numero')
            nmrtxt.value = ''
        } else {
            valores.push(nmr)
            nmrtxt.value = ''
            if (valores.length == 1) {
                maiorN = nmr
                menorN = nmr
            } else if (nmr > maiorN) {
                maiorN = nmr
            }else if (nmr < menorN) {
                menorN = nmr
            }
        }
    }
    nmrtxt.focus()
    p;innerText = ' '
}

function finalizar() {
    if (valores.length == 0) {
        alert('[erro] Por favor, adicione algum valor antes de finalizar')
    } else {
        for (let c in valores) {
            somaN += valores[c]
            console.log(`elemento [${c}] recebeu ${valores[c]}`)
        }
        media = somaN / valores.length

        cadastros.innerText = `O total de números cadastrados foi de ${valores.length}`
        pMaiorN.innerText = `O maior número cadastrado foi ${maiorN}`
        pMenorN.innerText = `O menor número cadastrado foi ${menorN}`
        soma.innerText = `A soma de todos os valores é de ${somaN}`
        Media.innerText = `A media dos numeros é de ${Number(media.toFixed(2))}`
    }  
}
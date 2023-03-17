var botao = document.getElementById('contar')
botao.addEventListener('click', clicar)

function clicar() {
    var iniciotxt = document.getElementById('inicio')
    var inicio = Number(iniciotxt.value)
    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)
    var passotxt = document.getElementById('passo')
    var passo = Number(passotxt.value)
    var res = document.getElementById('res')
    res.innerText = ''
    
    if (passo <= 0 || iniciotxt.value.length === 0 || fimtxt.value.length === 0) {
        alert('[erro] Adicione um valor válido')
    } else if (inicio < fim){
        while (inicio <= fim) {
            res.innerText += ` ${inicio} \u{1F449} `
            inicio += passo
        }
    } else if (inicio > fim) {
        while (inicio >= fim) {
            res.innerText += ` ${inicio} \u{1F449} `
            inicio -= passo
        }
    } else if (inicio == fim) {
        alert('[erro] Adicione um número diferente para Início e Fim')
    }
    var resFim = res.innerText.toString()
    var resNovo = resFim.slice(0, -2)
    res.innerText = resNovo
    res.innerText += ' \u{1F3C1}'
    document.getElementById('acabou').innerText = 'ACABOU!'
}
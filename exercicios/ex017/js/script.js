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
    
    if (passo <= 0) {
        alert('[erro] Adicione um passo ACIMA de 0')
    } else if (inicio < fim){
        while (inicio <= fim) {
            res.innerText += ` ${inicio}, `
            inicio += passo
        }
    } else if (inicio > fim) {
        while (inicio >= fim) {
            res.innerText += ` ${inicio}, `
            inicio -= passo
        }
    } else if (inicio == fim) {
        alert('[erro] Adicione um número diferente para Início e Fim')
    }
    
    document.getElementById('acabou').innerText = 'ACABOU!'
}
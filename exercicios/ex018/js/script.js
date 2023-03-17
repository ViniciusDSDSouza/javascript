var divTabuada = document.getElementById('tabuada')
var gerarTabuada = document.getElementById('gerar')
var ntxt = document.getElementById('nmr')

gerarTabuada.addEventListener('click', tabuada)

function tabuada() {
    if (ntxt.value.length === 0) {
        alert('[erro] Adicione Um Número!')
    }else {
        var n = Number(ntxt.value)
        for (var c = 1; c <=10; c++) {
            divTabuada.innerHTML += `<p>${n} x ${c} = ${n*c}</p>`
        }
        
    }
}
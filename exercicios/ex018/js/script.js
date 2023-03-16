var divTabuada = document.getElementById('tabuada')
var gerar = document.getElementById('gerar')
var ntxt = document.getElementById('nmr')
gerar.addEventListener('click', tabuada)

function tabuada() {
    if (ntxt.value === '') {
        alert('[erro] Adicione Um Número!')
    }else {
        var nmr = Number(ntxt.value)
        console.log(nmr)
        divTabuada.innerHTML = `
        <p>${nmr} x 0 = ${nmr*0}</p>
        <p>${nmr} x 1 = ${nmr*1}</p>
        <p>${nmr} x 2 = ${nmr*2}</p>
        <p>${nmr} x 3 = ${nmr*3}</p>
        <p>${nmr} x 4 = ${nmr*4}</p>
        <p>${nmr} x 5 = ${nmr*5}</p>
        <p>${nmr} x 6 = ${nmr*6}</p>
        <p>${nmr} x 7 = ${nmr*7}</p>
        <p>${nmr} x 8 = ${nmr*8}</p>
        <p>${nmr} x 9 = ${nmr*9}</p>
        <p>${nmr} x 10 = ${nmr*10}</p>
        `
    }
}
var tela = document.getElementById('telaP')

// 1° Linha
var c = document.getElementById('c')
var divi = document.getElementById('divi')
var multi = document.getElementById('multi')
var backSpace = document.getElementById('seta')

// 2° Linha
var n7 = document.getElementById('n7')
var n8 = document.getElementById('n8')
var n9 = document.getElementById('n9')
var sub = document.getElementById('sub')

// 3° Linha
var n4 = document.getElementById('n4')
var n5 = document.getElementById('n5')
var n6 = document.getElementById('n6')
var soma = document.getElementById('soma')

// 4° Linha
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var igual = document.getElementById('igual')

// 5° Linha
var n0 = document.getElementById('zero')
var ponto = document.getElementById('ponto')

// Evento 1° linha
c.addEventListener('click', clean)
divi.addEventListener('click', dividir)
multi.addEventListener('click', multiplicar)
backSpace.addEventListener('click', apagar)

// Evento 2° linha
n7.addEventListener('click', btn7)
n8.addEventListener('click', btn8)
n9.addEventListener('click', btn9)
sub.addEventListener('click', subtracao)

// Evento 3° linha
n4.addEventListener('click', btn4)
n5.addEventListener('click', btn5)
n6.addEventListener('click', btn6)
soma.addEventListener('click', somar)

// Evento 4° linha
n1.addEventListener('click', btn1)
n2.addEventListener('click', btn2)
n3.addEventListener('click', btn3)
igual.addEventListener('click', resultado)

// Evento 5° linha
n0.addEventListener('click', btn0)
ponto.addEventListener('click', virgula)

// Funções
function clean() {
    tela.innerHTML = ''
}

function dividir() {
    tela.innerText += '/'
}

function multiplicar() {
    tela.innerText += '*'
}

function apagar() {
    var textoTela = tela.innerText.toString()
    var novoTexto = textoTela.slice(0, -1)
    tela.innerText = novoTexto
}


function btn7() {
    tela.innerText += '7'
}

function btn8() {
    tela.innerText += '8'
}

function btn9() {
    tela.innerText += '9'
}

function subtracao() {
    tela.innerText += '-'
}

function btn4() {
    tela.innerText += '4'
}

function btn5() {
    tela.innerText += '5'
}

function btn6() {
    tela.innerText += '6'
}

function somar() {
    tela.innerText += '+'
}

function btn1() {
    tela.innerText += '1'
}

function btn2() {
    tela.innerText += '2'
}

function btn3() {
    tela.innerText += '3'
}

function resultado() {
    tela.innerText = eval(tela.innerText)
}

function btn0() {
    tela.innerText += '0'
}

function virgula() {
    tela.innerText += '.'
}
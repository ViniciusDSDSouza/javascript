var a = document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
a.addEventListener('mousedown', segurar)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'green'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'rgb(255, 115, 0)'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'red'
}

function segurar() {
    a.innerText = 'Segurando!'
    a.style.background = 'blue'
}

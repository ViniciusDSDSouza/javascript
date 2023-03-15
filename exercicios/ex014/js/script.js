// Obtendo a hora atual
var hora = new Date().getHours();

// Forçando uma hora 
// var hora = 16

// Selecionando elementos HTML
var msg = document.getElementById('msg');
var paisagem = document.getElementById('paisagem');
var bom = document.getElementById('bom');
var fundo = document.body.style; 

// Mostrando o Horário na tela
msg.innerText = `Agora São ${hora} Horas!`;

// Atualizando a interface
if (hora >= 6 && hora <= 12) { // Bom Dia
    paisagem.innerHTML = "<img src = '../img/manha.jpg'>"
    fundo.background = '#C39115'
    bom.innerHTML = `<strong>Bom dia!</strong>`
}else if (hora > 12 && hora <= 18) { // Boa Tarde
    paisagem.innerHTML = "<img src = '../img/tarde.jpg'>"
    fundo.background = '#D35B00'
    bom.innerHTML = '<strong>Boa Tarde!</strong>'
}else if (hora > 18 || hora < 6) { // Boa Noite
    paisagem.innerHTML = "<img src = '../img/noite.jpg'>"
    fundo.background = '#3D525A'
    bom.innerHTML = '<strong>Boa Noite!</strong>'
}else {
    alert('[error] Hora inválida')
}
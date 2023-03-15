var p1 = document.getElementsByTagName('p')[0]

document.write('"p1" Está Escrito Assim: ' + p1.innerText)

var corpo = document.body

corpo.style.background = 'rgb(20,90,150)'


//var d = document.getElementsByName('msg')[0] //NAME

//var d = document.getElementById('msg') ID

//var d = document.getElementsByClassName('msg') //CLASS

//var d = document.getElementsByTagName('msg') //TAG

var d = document.querySelector('div#msg') //Seletor

//var d = document.querySelectorAll('div#msg') //Seletores

d.innerText = 'Aguardando Comandos...'

d.style.background = 'green'

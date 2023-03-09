// Definindo o horário atual
var anoAtual = new Date().getFullYear()

// Selecionando elementos html
var anoNasceutxt = document.getElementById('ano')
var verificar = document.getElementById('verificar')
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')

// Evento de click
verificar.addEventListener('click', calcularIdade)

var genero = 'f'
function calcularIdade() {
    var anoNasceu = Number(anoNasceutxt.value)
    var idade = anoAtual - anoNasceu
    if (idade < 0) {
        alert('[erro] Insira um ano válido!')
    }else if (idade <= 12) { // Criança
        if (genero == 'm') {
        msg.innerHTML = `<p>Detectamos um Menino com ${idade} anos de Idade</p>`
        foto.innerHTML = `<img src = '../img/crianca-menino.jpg'>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Menina com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/crianca-menina.jpg'</img>`
        }
    }else if (idade <= 19) { //Jovem
        if (genero == 'm') {
            msg.innerHTML = `<p>Detectamos um Rapaz com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/adolescente-menino.jpg'</img>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Moça com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/adolescente-menina.jpg'</img>`
        }
    }else if (idade < 60) { // Adulto
        if (genero == 'm') {
            msg.innerHTML = `<p>Detectamos um Homem com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/homem.jpg'>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Mulher com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/mulher.jpg'>`
        }
    }else {
        if (genero = 'm') {
            msg.innerHTML = `<p>Detectamos um Idoso com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/idoso.jpg'>`
        }else if (genero = 'f') {
            msg.innerHTML = `<p>Detectamos uma Idosa com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/idosa.jpg'>`
        }
    }
}
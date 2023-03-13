// Definindo o ano atual
var anoAtual = new Date().getFullYear()

// Selecionando elementos html
var anoNasceutxt = document.getElementById('ano')
var verificar = document.getElementById('verificar')
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var radSex = document.getElementsByName('radsex')
var niver = document.getElementsByName('niver')

// Evento de click
verificar.addEventListener('click', calcularIdade)

function calcularIdade() {
    var anoNasceu = Number(anoNasceutxt.value)
    var idade = anoAtual - anoNasceu

    if (niver[0].checked) {
        idade = idade
    } else if(niver [1].checked) {
        idade--
    }

    if (radSex[0].checked) {
        genero = 'm'
    } else if (radSex[1].checked) {
        genero = 'f'
    }

    if (idade < 0 || anoNasceutxt.value.length == 0) {
        alert('[erro] Insira um ano válido!')
    }else if (idade <= 12) { 
        // Criança
        if (genero == 'm') {
        msg.innerHTML = `<p>Detectamos um Menino com ${idade} anos de Idade</p>`
        foto.innerHTML = `<img src = '../img/foto-bebe-m.png'>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Menina com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-bebe-f.png'</img>`
        }
    }else if (idade <= 19) { 
        //Jovem
        if (genero == 'm') {
            msg.innerHTML = `<p>Detectamos um Rapaz com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-jovem-m.png'</img>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Moça com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-jovem-f.png'</img>`
        }
    }else if (idade < 60) { 
        // Adulto
        if (genero == 'm') {
            msg.innerHTML = `<p>Detectamos um Homem com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-adulto-m.png'>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Mulher com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-adulto-f.png'>`
        }
    }else {
        // Idoso
        if (genero == 'm') {
            msg.innerHTML = `<p>Detectamos um Idoso com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-idoso-m.png'>`
        }else if (genero == 'f') {
            msg.innerHTML = `<p>Detectamos uma Idosa com ${idade} anos de Idade</p>`
            foto.innerHTML = `<img src = '../img/foto-idoso-f.png'>`
        }
    }
}
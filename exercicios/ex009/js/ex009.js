 var país = document.querySelector("input[type = 'text']")

 var botao = document.querySelector("input[type = 'button']")

 botao.addEventListener('click', verificar)

 var res = document.getElementById('res')

 function verificar() {
   if (país.value == 'Brasil' || país.value == 'brasil') {
      res.innerText = 'Você é brasileiro'
   } else {
      res.innerText = 'Você é estrangeiro'
   }
 }
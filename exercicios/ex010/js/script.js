var botao = document.querySelector('input[type=button]'); //seleciona o botão de Verificar
botao.addEventListener('click', verificar); //evento de click no btn Verificar

function verificar() {
  var veloctxt = document.getElementById('txtveloc');
  var veloc = Number(veloctxt.value);

  var suaVelocidade = document.getElementById('velocidade')
  suaVelocidade.innerText = `\nSua velocidade foi ${veloc}Km/h`

  var multa = document.getElementById('multa');
  
  if (veloc > 80) {
    multa.innerText = 'Você foi multado!';
  } else {
    multa.innerText = 'Você não foi multado!';
  }
}

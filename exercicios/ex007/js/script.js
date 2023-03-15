var Somar = document.getElementById('Somar'); //vincular uma variável com o botao de somar

Somar.addEventListener('click', soma); //vincular a variável com evento de clique no botão de soma

function soma() {
    var txtn1 = document.getElementById('txtn1');
    //string

    var txtn2 = document.getElementById('txtn2');
    //string
    
    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    s = n1 + n2;
    //converter para Number antes de somar

    //se somasse txtn1 + txtn2 o resultado seria uma string concatenada

    var resultado = document.getElementById('res'); //vincular uma variável a div de resultado

    resultado.innerHTML = 'Resultado = <strong>' + s + '</strong>'; //mostrar o resultado

    resultado.style.background = 'rgba(21,173,79,0.767)'
    resultado.style.border = '1px solid black'
}
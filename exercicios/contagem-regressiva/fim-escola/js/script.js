var diaHoje = new Date() // Retorna Data Atual em forma de object

var ultimoDia = new Date('2023-12-16') // Ultimo dia de aula

// Puxando elementos HTML
var contagemDias = document.getElementById('dias')
var contagemHoras = document.getElementById('horas')
var contagemMinutos = document.getElementById('minutos')
var contagemSegundos = document.getElementById('segundos')

function atualizarContagem() {

    // Retorna a diferença em milissegunsdos das duas datas
    var faltamMilissegundos = diaHoje.getTime() - ultimoDia.getTime()

    // Millisegundos Para Dias
    var diasFaltam = faltamMilissegundos / (1000 * 60 * 60 *24)

    // Tempo atual
    var horaAtual = new Date().getHours()
    var minAtual = new Date().getMinutes()
    var secAtual = new Date().getSeconds()
    
   contagemDias.innerHTML = `<p><strong>${parseInt(diasFaltam)}</strong> Dias</p>`// Dias

   contagemHoras.innerHTML = `<p><strong>${parseInt(horaAtual)}</strong> Horas</p>`// Horas

   contagemMinutos.innerHTML = `<p><strong>${minAtual} </strong> Minutos</p>`// Minutos

   contagemSegundos.innerHTML = `<p><strong>${secAtual}</strong> Segundos</p>`// Segundos

}
setInterval(atualizarContagem, 0)
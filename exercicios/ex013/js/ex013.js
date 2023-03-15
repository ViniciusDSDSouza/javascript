var dia = new Date().getDay()

// 0 = domingo
// 1 = segunda-feira
// 2 = terça-feira
// 3 = quarta-feira
// 4 = quinta-feira
// 5 = sexta-feira
// 6 = sabado

//var dia = 0;

switch(dia) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda-feira');
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sabado')
        break

    default:
        console.log('dia inválido')
}
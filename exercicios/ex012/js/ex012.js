var hora = new Date().getHours(); //pega a hora do sistema

console.log(`Agora são ${hora} horas!`);

if (hora >= 6 && hora <= 12) {
    console.log('Bom Dia!')
}else if(hora > 12 && hora <= 18){
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}
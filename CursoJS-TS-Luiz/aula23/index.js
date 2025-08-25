function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
// let rand = 10;

//CHECA A CONDICAO E EXECUTA O WHILE
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('#####')

//EXECUTA O WHILE E DEPOIS CHEGA A CONDICAO
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);
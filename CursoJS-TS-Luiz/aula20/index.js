// const frutas = ['Pera', 'Maça', 'Uva'];

// // for (let i = 0; i < frutas.length; i++) {
// //     console.log(frutas[i]);
// // };

// for ( let i in frutas) {
//     console.log(frutas[i]);
// };

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30,
};

for (let i in pessoa) {
    console.log(i);
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};
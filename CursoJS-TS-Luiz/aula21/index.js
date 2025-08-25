// const nome = 'Luiz Otavio'

const nome = ['Luiz', 'Henrique', 'Otavio'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// };


//PERCORRE TODOS OS INDICES E RETORNA TBM
// for (let i in nome) {
//     console.log(nome[i]);
// };

//USADO PARA PEGAR O VALOR DO INDICE, PARA OBJETOS ELE NAO FUNCIONA
for (let valor of nome) {
    console.log(valor);
};

nome.forEach(function(element, i, array) {
    console.log(element, i, array);
});
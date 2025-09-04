//Filter, map, reduce
//Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1 ,2 ,3, 5, 8, 7, 11, 15, 22, 27]

//FILTER -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.
// const numero10 = numeros.filter(valor => valor > 10);
// console.log(numero10)

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
// console.log(pessoasComNomeGrande)

// const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50)
// console.log(pessoasComMaisDe50)

// const pessoaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
// console.log(pessoaA)


//MAP -> Sempre vai alterar os valores do array, para nao alterar, criar novo objeto, mas nunca a quantidade de elementos
// const numerosDobro = numeros.map(valor => valor * 2)
// console.log(numerosDobro)

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
// const soNomes = pessoas.map(obj => obj.nome)
// console.log(soNomes)

// const removeNome = pessoas.map(obj => {
//     delete obj.nome
//     return obj
// })
//OU
//const removeNome = pessoas.map(obj => ({ idade: obj.idade}))
// console.log(removeNome)

// function geraN() {
//     return (Math.random() * (10 - 1) + 1).toFixed(0)
// }

// const comId = pessoas.map(function(obj) {
//     const newObj = {...obj}
//     newObj.id = geraN();
//     return newObj;
// })

// console.log(comId)
// console.log(pessoas)

//REDUCE -> Usado geralmente para reduzir o array para uma informaçao
//Some todos os numeros (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
// const somaNum = numeros.reduce(function(acumulador, valor) {
//     acumulador += valor
//     return acumulador
// }, 0);
// console.log(somaNum)

// //usando a linha de raciciono filter
// const somaNum2 = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador
// }, []);
// console.log(somaNum2)

// //usando a linha de raciciono map
// const somaNum3 = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2)
//     return acumulador
// }, []);
// console.log(somaNum3)

//Retorne a pessoa mais velha
// const maisVelha = pessoas.reduce(function(acumulador, valor) {
//     if (acumulador.idade > valor.idade) return acumulador
//     return valor
// })

// console.log(maisVelha)


//COMBINANDO FILTER, MAP E REDUCE
// -> FILTRAR PARES
// -> DOBRAR VALORES
// -> REDUZIR (SOMAR TUDO)
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)
console.log(numerosPares)







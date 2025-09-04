// let a = 'A'
// let b = 'B'
// let c = 'C'

// const numeros = [1, 2];
// [a, b, c] = numeros

// console.log(numeros)
 
// const numeros = [ [1, 2, 3], [4, ,5, 6], [7, 8, 9] ]

// const [list1, list2, list3] = numeros
// console.log(list3[2])

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Goncalves',
    idade: 25,
    endereco: {
        rua: 'Vera Cruz',
        numero: 739
    }
}

//Atribuiçao via desestruturacao
const { nome: teste = '', sobrenome, endereco: { rua, numero } } = pessoa

console.log(teste, sobrenome, rua, numero)
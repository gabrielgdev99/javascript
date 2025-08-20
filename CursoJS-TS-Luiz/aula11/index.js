const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade() {
        ++this.idade
    }
}

pessoal.fala()

// //ESSA FUNCTION É UMA FACTORY, ELA CRIA OBJETOS
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
// const pessoa2 = criaPessoa('Maria', 'Louca', 28)
// const pessoa3 = criaPessoa('Joao', 'Ferraz', 34)
// const pessoa4 = criaPessoa('Vagner', 'Mattos', 45)
// const pessoa5 = criaPessoa('Astolfo', 'Oliveira', 55)


// console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade)
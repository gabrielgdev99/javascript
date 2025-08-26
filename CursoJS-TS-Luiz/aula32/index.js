//FUNCAO CONSTRUTORA -> OBJETOS
//FUNCAO FABRICA -> OBJETOS
//CONSTRUTORA -> Pessoa (new)

function Pessoa(nome, sobrenome) {

    // ATRIBUTOS OU METODOS PRIVADOS
    const ID = 123456;

    const metodoInterno = function () {
        console.log(ID);
    }

    // ATRIBUTOS OU METODOS PUBLICOS
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('Sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Miranda');

p2.metodo()
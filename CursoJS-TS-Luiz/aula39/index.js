//OBJETOS

// const person1 = new Object()
// person1.name = 'Luiz'
// person1.lastName = 'Otavio'
// person1.age = 30
// person1.sayName = function() {
//     console.log(`${this.name} are saying his name.`)
//     return
// }
// person1.getBirthDate = function() {
//     const currentDate = new Date()
//     return currentDate.getFullYear() - this.age
// }

//FACTORY FUNCTIONS / CONSTRUCTOR FUNCTIONS / CLASSES

//FACTORY
function createPerson (name, lastName) {
    return {
        name,
        lastName,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

const person1 = createPerson('Luiz', 'Otavio')

console.log(person1.getFullName())

//CONSTRUCTOR
function Person(name, lastName) {
    this.name = name
    this.lastName = lastName

    //PARA TRAVAR O OBJECT NO MOMENTO DE CRIACAO USAR O CODIGO DENTRO DA FUNCAO
    Object.freeze(this)
}

// A PALAVRA NEW CRIA UM OBJETO VAZIO {}, VAI PEGAR A PALAVRA this E ATRELAR A ESSE NOVO OBJETO E JA RETORNA O PROPRIO THIS, POR ISSO NAO USA RETURN 
const person2 = new Person('Luiz', 'Otavio')
// AQUI O QUE ALTERA NAO É O CONST, E SIM O VALOR DO VALOR DA CONST
person2.name = 'Nelson'
delete person2.lastName
// PARA TRAVAR O OBJETO E ELE NAO SER ALTERADO USAR O CODIGOO FREEZE
Object.freeze(person2)
person2.name = 'Sergio'

console.log(person2)
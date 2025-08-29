//FACTORY FUNCTIONS + PROTOTYPES

const speak = {
    speak() {
        console.log(`${this.name} say hi.`)
    }
}
const eat = {
    eat() {
        console.log(`${this.name} are eating.`)
    }
}
const drink = {
    drink() {
        console.log(`${this.name} are drinking.`)
    }
}
const fullName = {  
    fullName() {
        console.log(`Fullname: ${this.name} ${this.lastName}`)
    }
}

const personPrototype = { ...speak, ...eat, ...drink, ...fullName} //FORMA 1
// const personPrototype = Object.assign({}, speak, eat, drink, fullName) //FORMA 2

function createPerson(name, lastName) {
    return Object.create(personPrototype, {
        name: { value: name },
        lastName: { value: lastName}
    })
}

const p1 = createPerson('Luiz', 'Otavio')
console.log(p1)
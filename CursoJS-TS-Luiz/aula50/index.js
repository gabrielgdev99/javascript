//CLASSES

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    speak() {
        console.log(`${this.name} are talking.`)
    }
    
    eat() {
        console.log(`${this.name} are eating.`)
    }

    drink() {
        console.log(`${this.name} are drinking.`)
    }

}

const p1 = new Person('Luiz', 'Miranda')
console.log(p1)
console.log(p1.speak())
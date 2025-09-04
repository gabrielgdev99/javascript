//PROTOTYPES
//CONSTRUCTOR -> Molde(classes)

function Person(name, lastName) {
    this.name = name
    this.lastName = lastName
}

Person.prototype.fullName = function() {
    return this.name + ' ' + this.lastName
}

//INSTANCE
const person1 = new Person('Luiz', 'O.')
const person2 = new Person('Maria', 'A.')

console.dir(person1)
console.dir(person2)
// const name = "Luiz";
// const lastName = "Miranda";

// const sayName = () => name + " " + lastName;

// exports.name = name;
// exports.lastName = lastName;
// exports.sayName = sayName;
// this.anyThing = "O que eu quiser exportar";

//FAZENDO COM CLASSES

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

exports.Person = Person;

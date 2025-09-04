// const mod1 = require("./mod1"); //IMPORTANDO O MODULO TODO
// const mod1 = require("./mod1").sayName; //SE EU QUISER IMPORTAR SÓ ALGO ESPECIFICO
// const sayName = mod1.sayName; //PARA USAR SEM REFERENCIA POSSO ATRIBUIR A UM CONST
// const { name, lastName, sayName } = require("./mod1"); //IMPORTA E JA DESESTRUTURA

// console.log(name, lastName);
// console.log(sayName());

//FAZENDO COM CLASSES

const path = require("path");
const { Person } = require("./mod1");

const p1 = new Person("Luiz", "Miranda");

console.log(p1);

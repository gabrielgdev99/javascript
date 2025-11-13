import { alfabeto } from "./base.js";

// [abc] -> Conjunto | [^] -> Negação
// [-] De alguma coisa até a outra coisa
// [min-maxQUALQUERCOISA] Ele entende diferentes ranges dentro do mesmo colchetes, funciona negação nele tbm

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-k]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); //Negação
//console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); //Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S/g));

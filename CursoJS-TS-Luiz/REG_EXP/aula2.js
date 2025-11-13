import texto from "./base.js";

const regExp1 = /João|Maria/gi;

// (...)(...)(...) $1 $2 $3 -> Cada um representa um grupo, se tiver grupos dentros de grupos é na sequencia os numeros dos grupos.

console.log(texto.match(regExp1));
console.log(texto.replace(/(João|Maria)/gi, "Felipe"));
console.log(texto.replace(/(João|Maria)/gi, '"$1"'));

console.log(
  texto.replace(/(João|Maria)/gi, function (input) {
    return input.toUpperCase();
  })
);

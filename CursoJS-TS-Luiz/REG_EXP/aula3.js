import { texto, arquivos } from "./base.js";

// QUANTIFICADORES
// * (opcionais) 0 ou mais X {0,}
// + (obrigatório) 1 ou mais X {1,}
// ? (opcionais) 0 ou 1 {0, 1}
// \ barra invertida é caractere de escape
// {n, m} - minimo e maxo
// {10,} no minimo 10
// {0,10} de 0 a 10
// {5,10} de 5 a 10
// {10}

//console.log(texto);

//const regExp1 = /Jo+ão+/gi;

//console.log(texto.match(regExp1));

//const regExp2 = /\.jpe{0,1}g/gi;
const regExp2 = /\.(jp|JP)(e|E)?(g|G)/g;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  //if (!valido) continue;

  console.log(arquivo, valido);
}

//FLAGS
// g - global (encontra todas as ocorrências)
// i - insensitive (encontra qualquer variação da letra, maiscula ou minuscula)
// ()() Criar grupos das expressões regulares
// | ou

import texto from "./base.js";

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;

const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}

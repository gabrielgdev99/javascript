import { cpfs2 } from "./base.js";

// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m -> multiline (percorre todas as linhas, muda o comportamento do começa com e termina com)

const cpf = "254.224.877-45";
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2.match(cpfRegExp));

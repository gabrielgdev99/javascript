import { lookahead } from "./base.js";

//console.log(lookahead);
//console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahed (frases que tem active)
//console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahed (frases que tem inactive)
//console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookahed (frases que NÃO tem active)
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookahed (frases que NÃO tem inactive)
//console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positivo lookbehind (Frases que começam com ONLINE)
//console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (Frases que começam com ONLINE)
//console.log(lookahead.match(/^.+(?<!^ONLINE.+)$/gim))

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
`;

console.log(
  cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)
);

//Encontrando palavras com acento
const palavrasRegEx = /([\wÀ-ú]+)/g;

//Não numeros
const EliminaNaoNumeros = /\D/;

//Valida IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

//Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

//Valida Telefone
const validaTel = /^(\(\d{2}\))\s*?(9\s*)?(\d{4})-(\d{4})$/g;

//Valida senhas fortes
const validaPas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/;

//Valida email
const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
const validaEmail2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//48 a 57 num
//65 a 90 letra mai
//97 a 122 letra min

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateMai = () => String.fromCharCode(rand(65, 91));
const generateMin = () => String.fromCharCode(rand(97, 123));
const generateNum = () => String.fromCharCode(rand(48, 58));
const symbols = "!@#$%^&*()-_=+[]{};:,.<>?/|~`";
const generateSymb = () => symbols[rand(0, symbols.length)];

export default function generatePass(qnt, mai, min, num, symb) {
  const arrayPass = [];
  qnt = Number(qnt);

  for (let i = 0; i <= qnt; i++) {
    mai && arrayPass.push(generateMai());
    min && arrayPass.push(generateMin());
    num && arrayPass.push(generateNum());
    symb && arrayPass.push(generateSymb());
  }

  return arrayPass.join("").slice(0, qnt);
}

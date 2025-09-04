import generatePass from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qntCaract = document.querySelector(".qtd-caract");
const chkMai = document.querySelector(".chk-maiuscula");
const chkMin = document.querySelector(".chk-minuscula");
const chkNum = document.querySelector(".chk-numeros");
const chkSymb = document.querySelector(".chk-simbolos");
const btn = document.querySelector(".gerar-senha");

export default () => {
  btn.addEventListener("click", () => {
    senhaGerada.innerHTML = generate();
  });
};

function generate() {
  const password = generatePass(
    qntCaract.value,
    chkMai.checked,
    chkMin.checked,
    chkNum.checked,
    chkSymb.checked
  );
  return password || "Nada selecionado";
}

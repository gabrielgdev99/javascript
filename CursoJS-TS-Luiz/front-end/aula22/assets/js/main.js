const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//PEGA O STYLE DO CSS QUE ESTA NO DOCUMENTO
const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
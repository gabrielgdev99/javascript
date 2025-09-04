//OBJETO MATH

// let num1 = 9.5453
// let num2 = Math.floor(num1) //ARREDONDA PRA BX
// let num2 = Math.ceil(num1) //ARRENDONDA PRA CIMA
// let num2 = Math.round(num1) //ARREDONDA PARA O NUMERO MAIS PROXIMA

const num = Number(prompt('Digite um numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = num
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É NaN:  ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`

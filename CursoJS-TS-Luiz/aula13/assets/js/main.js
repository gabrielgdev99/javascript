//ESCUTA O EVENTO DE SUBMIT DO BOTAO
const form = document.querySelector('.formulario')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputPeso = document.querySelector('#peso')
    const inputAltura = document.querySelector('#altura')
    
    const peso = Number(inputPeso.value.replace(',', '.'));
    const altura = Number(inputAltura.value.replace(',', '.'));

    if (!peso) {
        setResultado('Peso inválido')
        return;
    }

    if (!altura) {
        setResultado('Altura inválida')
        return;
    }

    const imc = getImc (peso, altura)
    const faixaImc = getFaixaImc(imc)

    const msg = `Seu IMC é ${imc} (${faixaImc}).`

    setResultado(msg, true)

})

function getFaixaImc (imc) {
    const faixa = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return faixa[5]
    if (imc >= 34.9) return faixa[4]
    if (imc >= 29.9) return faixa[3]
    if (imc >= 24.9) return faixa[2]
    if (imc >= 18.5) return faixa[1]
    if (imc < 18.5) return faixa[0]
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP () {
    const p = document.createElement('p')
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''

    const p = criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}



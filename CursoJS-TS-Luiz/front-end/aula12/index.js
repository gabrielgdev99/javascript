function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    //FORMA QUE SÓ ESCUTA SE CLICAR COM O MOUSE
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    //FORMA QUE ESCUTA QUALQUER EVENTO
    function recebeEventoForm (evento) {
        evento.preventDefault() //Cancela um evento padrao do navegador

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo()
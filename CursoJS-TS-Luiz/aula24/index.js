const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        console.log('Pulei o numero 2 e 5')
        continue; //PULA PRA PROXIMA ITERAÇAO DO LAÇO, VEM ANTES DA ACAO QUE ESTAMOS EXECUTANDO
    }

    if (numero === 8) {
        break; //PARAR O LAÇO
    }

    console.log(numero);
}
// //FORMAS DE DECLARA FUNCOES

// //DECLARACAO DE FUNCAO (function hoisting)
// function falaOi() {
//     console.log('oi');
// };
// falaOi();

// //FIRST-CLASS OBJECTS (Objetos de primeira classe) - isso quer dizer que a gente pode tratar a funcao como um dado
// //FUNCTION EXPRESSION
// const souUmDado = function () {
//     console.log('Sou um dado');
// };
// souUmDado();

// //ARROW FUNCTION
// const arrowFunction = () => {
//     console.log('Sou uma arrow function');
// };
// arrowFunction();

// //DENTRO DE UM OBJETO EU POSSO TER UMA FUNCAO TAMBEM
// const obj = {
//     falar () {
//         console.log('Estou falando');
//     }
// };
// obj.falar();




//PARAMETROS DE FUNCAO
//QUANDO É PASSADO ARGUMENTOS PARA UMA FUNCAO (DEFINADA PELA PALAVRA FUNCTION) SEM PARAMETRO NECESSARIO EXISTE O arguments PARA ACESSAR OS ARGUMENTOS PASSADOS PARA A FUNCAO
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// const conta = function(operador, acumulador, ...numeros) {
//     for(let numero of numeros) {
//         if (operador === '-') acumulador -= numero
//         if (operador === '+') acumulador += numero
//         if (operador === '*') acumulador *= numero
//         if (operador === '/') acumulador /= numero
//     }
//     console.log(acumulador)
// }
// conta('+', 2, 10, 20, 30, 40, 50)





//RETURN
//RETORNA UM VALOR, ISSO TERMINA A FUNCAO
// function soma(a, b) {
//     return a + b;
// }

// function criaPessoa( nome, sobrenome) {
//     return { nome, sobrenome };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1);

// function falaFrase (comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Ola');
// const resto = fala('mundo!');
// console.log(resto)

// function criaMultiplicador(multiplicador) {
//     return function(n) {
//         return n * multiplicador;
//     }
// }

// const duplica = criaMultiplicador(2);
// const triplica = criaMultiplicador(3);
// const quadruplica = criaMultiplicador(4);

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadruplica(2));



//ESCOPO LEXICO
//BASICAMENTE É QUE UM FUNCAO CONSEGUE ACESSAR SEUS VIZINHOS CASO NAO ENCONTRE OS DADOS NECESSARIOS DENTRO DA PROPRIA FUNCAO

//CLOSURES
//QUANDO A GENTE DECLARA A FUNCAO E O PARAMETRO NAO VAI MAIS MUDAR, BASICAMENTE É A HABILIDADE QUE A FUNCAO TEM DE ACESSAR O SEU ESCOPO LEXICO

//FUNCAO DE CALLBACK
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min;
//     return Math.floor(num);
// }
// //simulando uma demora na web

// function f1(callback) {
//     setTimeout(function() {
//         console.log('f1');
//         if (callback) callback();
//     }, rand());
// }
// function f2(callback) {
//     setTimeout(function() {
//         console.log('f2');
//         if (callback) callback();
//     }, rand());
// }
// function f3(callback) {
//     setTimeout(function() {
//         console.log('f3');
//         if (callback) callback();
//     }, rand());
// }

// f1(f1Callback);

// function f1Callback() {
//     f2(f2Callback);
// }
// function f2Callback() {
//     f3(f3Callback);
// }
// function f3Callback() {
//     console.log('Olá mundo!');
// }



//IIFE -> Imeediately invoked function expression
//DEFINIDA DENTRO DE () E TUDO QUE É COLOCADO DENTRO É EXECUTADO IMEDIATAMENTE E NAO AFETA O ESCOPO GLOBAL
// (function(idade, peso, altura) {
//     const nome = 'Luiz';
//     console.log(nome);
//     console.log(peso / (altura * altura))
// })(30, 80, 1.80) //DA PRA PASSAR PARAMETROS TBM

// const nome = 'Otávio';
// console.log(nome);



//FUNCOES FABRICAS (FACTORY FUNCTIONS)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //Getter (quer só obter o valor)
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter (quer alterar o valor)
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'nada') {
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura,
        peso,
        //Getter (quer só obter o valor)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
const p2 = criaPessoa('Vagner', 'Miranda', 1.65, 58);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.fala('Javascript'))
console.log(p1.imc)
console.log(p1.nomeCompleto)
console.log(p2.fala('PHP'))
console.log(p2.imc)
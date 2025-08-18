
// Como declarar variaveis em JavaScript
// var message = 'Hello World!' (NAO É UTILIZADO MAIS ESSA FORMA, POR PODER SER UTILIZADAO EM QUALQUER LUGAR DO CÓDIGO)
// const (ESSA É A MELHOR FORMA DE DECLARAR VARIAVEIS, POIS NÃO PODE SER REATRIBUIDA)
// let (ESSA É A FORMA DE DECLARAR VARIAVEIS QUE PODEM SER REATRIBUIDAS)


// Strings

//const message = 'Hello World!'

//console.log(message.length)

//const firstName = 'Gabriel';
//const lastName = 'Gonçalves';

//const names = 'Gabriel, Antonio, Jorge'

//console.log('Meu nome é ' + firstName + ' ' + lastName);
//console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

//console.log(names.split(','));

// Numbers

//const number = 5;

//console.log(number.toString());
//console.log(typeof number.toString());


// Booleans

//false
//true

//console.log( 2 == 2);

// Null e Undefined
// Null é um valor vazio, enquanto Undefined é uma variável que não foi definida
//const x = null;
//const y = undefined;


// Lists and Objects
// No JS, listas são chamadas de Arrays e objetos são chamados de Objects, listas podem armazenar vários valores e de varios tipos.

//const names = ['Gabriel', 'Antonio', 'Jorge', 10, true];
//const antonio = names[1];

//names.pop(); // Remove o último elemento do array
//names.pop(); // Remove o último elemento do array novamente
//names.push('Maria'); // Adiciona um novo elemento ao final do array
//names.shift(); // Remove o primeiro elemento do array
//names.unshift('Lucas'); // Adiciona um novo elemento ao início do array
//names[2] = 'João'; // Substitui o elemento na posição 2 por 'João'
//names.splice(1, 2); // Remove os elementos na posição 1 e 2
//names.splice(2, 1, 'Carlos'); // Remove o elemento na posição 2 e adiciona 'Carlos' no lugar

//console.log(names.indexOf('Gabriel')); // Retorna o índice do elemento 'Gabriel'
//console.log(names.includes('Antonio')); // Verifica se 'Antonio' está no array

//const sortedNames = names.sort(); // Ordena os nomes em ordem alfabética
//const nameIsArray = Array.isArray(names); // Verifica se 'names' é um array

//console.log(sortedNames);
//console.log(names);

//const numbers = [1, 2, 3, 4, 5];
//const doubledNumbers = numbers.map((number) => {
//    return number * 2;
//});
// O método map cria um novo array com os resultados da chamada da função fornecida em cada elemento do array original
// O método map não altera o array original, ele cria um novo array com os resultados da função aplicada a cada elemento
// O método map é útil quando você deseja transformar os elementos de um array em algo diferente, como neste exemplo, onde estamos dobrando os números

//console.log(doubledNumbers);

//const ages = [18, 20, 25, 30, 35];
//const pares = ages.filter((age) => {
//    return age % 2 === 0;
//});

// O método filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida
// O método filter não altera o array original, ele cria um novo array com os elementos que passam no teste
// O método filter é útil quando você deseja selecionar um subconjunto de elementos de um array com base em uma condição específica, como neste exemplo, onde estamos selecionando apenas as idades pares

//console.log(pares);

//const sumOfAges = ages.reduce((accumulator, currentValue) => {
//    return accumulator + currentValue;
//}, 0);
// O método reduce executa uma função redutora em cada elemento do array, resultando em um único valor
// O método reduce não altera o array original, ele cria um novo valor com base na função

//console.log(sumOfAges);

// Objects, guarda valores dentro de propriedades

// const person = {
//     firstName: 'Felipe',
//     lastName: 'Rocha',
//     age: '21',
//     hobbies: ['Assistir F1', 'Jogar Futebol', 'Ler'],
//     dog: {
//         name: 'Simba',
//         age: 4
//     }
// };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima
// const {firstName: primeiroNome, lastName, age, hobbies, dog: {name: dogName}} = person

// console.log(primeiroNome)
// console.log(lastName)
// console.log(age)
// console.log(hobbies[2])

// Adc uma nova propriedade para o objeto
// person.dog = 'Simba'

// console.log(dogName);

// Podemos colocar objetos dentro de outros objetos e acessa-las respectivamente
// O que mais veremos será lista contendo varios objetos



//Ex do dia-a-dia

// const todos = [
//     {
//         id: 1,
//         description: 'Estudar programaçao',
//         isCompleted: false
//     },
//     {
//         id: 2,
//         description: 'Ler',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         description: 'Treinar',
//         isCompleted: false
//     }
// ];

// //const descriptionOfLastTodo = todos [2].description;

// //console.log(descriptionOfLastTodo)

// // Para converter para json (IMPORTANTE, ELE PASSA A NAO SER UMA LISTA MAIS, E FICA COMO SE FOSSE UMA STRING)
// const todosJSON = JSON.stringify(todos );

// // Para converter um json para lista
// const todoList = JSON.parse(todosJSON);

// Tudo o que formos mandar para um servidor precisar ser mandado como JSON, e tudo que vem de um servidor precisa ser transformado para uma lista.


// Loops no JS

// FOR
// for (let index = 0; index < 10; index ++) {
//     console.log(index);
// }

//const cars = ['Ferrari', 'Tesla', 'Mercedes'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }


//Quando for listas é bem melhor essas duas formas abaixo

//for (let car of cars) {
//     console.log(car)
// }

// cars.forEach(function (car, index)) {
//     console.log(index);
//     console.log(car)
// }

// WHILE
// let index = 0;

// while (index < 10) {
//     console.log('Index é menor do que 10!');
//     index = index + 1; // MESMA COISA
//     index +=1; // MESMA COISA
//     index++ //MESMA COISA
// }

// const person = {
//     name: 'Jane',
//     age: 21,
// };

// Este loop nao é mt performatico, nao é mt rapido.
// for (property in person) {
//     console.log(person[property]);
// }

// IF ou ELSE

// const sum = 1 + 2;

// if (sum == 2) {
//     console.log('Sum is 2!');
// }   else if(sum === 3) {
//     console.log('Sum is 3!');
// }   else {
//     console.log('Sum is not 2!')
//}
// o == é para verificar se o dado é igual, ja o === é pra verificar o dado e o tipo do dado

// && = operador AND
// || = operador OR

// const sum1 = 1 + 1;
// const sum2 = 3 + 3;

// if (sum1 === 4 || sum2 === 6) {
//     console.log('Sum is match');
// }

// if (sum1 === 4 && sum2 === 6) {
//     console.log('Sum is match');
// }

// if (sum1 === 2) {
//     number = 2;
// } else {
//     number = 4;
// }

//  Mesma coisa que acima, o ponto de interrogaçao sinaliza o que acontecera caso seja verdadeiro, e o dois pontos caso for negativo.
// let number = sum1 === 2 ? 2 : 4;

// console.log(number);

// SWITCH

// const car = 'Mercedes'

// switch (car) {
//     case 'Mercedes':
//         console.log('Mercedes is beautiful!')
//         break;
//     case 'Ferrari':
//         console.log('Ferrari is very red!')
//         break;
//     case 'Tesla':
//         console.log('Tesla is very smart!')
//         break;
// }

// Break funciona para sair do switch

// Conceito de truthy e falsy
//const x = '';
//const y = 0;
//const a = null;
//const b = undefined;
// TODAS ESSAS SAO FALSE

//const list = [];
// UMA LISTA VAZIA É TRUE
//const object = {};
// UM OBJETO VAZIO É TRUE

// Se vc quiser verificar se uma lista é vazia usa abaixo
// const object = [];
// if (object.length > 0) {
//     console.log(object);
// }

// !! CHEGA TRUTHY OR FALSY DE UMA VARIAVEL
// ! VOCE INVERTE QUALQUER BOLEANO

// FUNCOES E ARROW FUNCTIONS

// VAI SERVIR PARA UTILIZAR NO CODIGO POSTERIORMENTE, AI É SÓ PASSAR OS PARAMETROS
// CASO NAO SEJA COLOCADO TODOS OS PARAMETROS DA PARA DETERMINAR UM PARAMETRO FIXO

// FUNCTION
// function sum(a, b = 10) {
//     return a + b;
//     //console.log(a + b)
// }

// ARROW FUNCTIONS (ELA É DECLARADA COMO UMA VARIAVEL)
// const sumArrow = (a, b) => {
//     console.log(a, b);
//     return a + b;
// }
// MESMA COISA DO RETURN ACIMA
// const sumArrow = (a, b) => a + b;

// const sumValue = sumArrow(2, 2);

// console.log(sumValue);

// PROGRAMACAO ORIENTADA A OBJETOS

// CLASSES
//IMPRESSORAS DE OBJETOS, CONSEGUE DEFINIR UMA ENTIDADE E IMPRIMIR UM OBJETO DESSA ENTIDADE

//class Person {
//    constructor(firstName, lastName, age) {
//        this.firstName = firstName,
//        this.lastName = lastName,
//        this.age = age;
//    }

//    getFullName () {
//        console.log(`${this.firstName} ${this.lastName}`);
//    }

//    static speak() {
//       console.log('Hello World!')
//    }
//}

//const person = new Person('Jane', 'Doe', 40);

//Person.speak();

//ENTENDER CLASSES
//ENTENDER COMO FUNCIONA METODOS E PRA QUE SERVEM
//METODOS ESTATICOS, DIF.
//ENTENDER HERANÇA

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
    
//     speak() {
//         console.log(`${this.name} made some noise!`)
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     speak() {
//         console.log(`${this.name} barked!`);
//     }
// }

// const animal = new Animal('Simba');
// const dog = new Dog('Bob')

// animal.speak();
// dog.speak();

//SELECIONANDO ELEMENTOS DO DOM

//Selecionar um item

//const addUserText = document.getElementById('add-user')
//addUserText.innerText = 'Adicionar usuário';

//const addUserText = document.querySelector('#add-user')
//addUserText.textContent = 'Adicionar usuário';

//Usar mais o queryselector

//Selecionar multiplos elementos

//const allItens = document.querySelectorAll('.item');

//const items = document.querySelector('.items');

//items.remove();

//items.firstElementChild.remove();
//items.lastElementChild.remove();
// items.children[1].textContent = 'Item dois';

// items.lastElementChild.innerHTML = '<h1>Hello World</h1>';

//MUDANDO COR DE ELEMENTOS
// const button = document.querySelector('.btn');

// button.style.background = 'blue';
// button.style.color = 'red';

//EVENTOS

// const submitButton = document.querySelector('#submit-button');
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const items = document.querySelector('.items');
// const body = document.querySelector('body');

// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();
    
//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;

//     if (nameValue === '' || emailValue === '') {
//         alert('Please fill out all the fields!');
//     }

//     myForm.style.background = 'blue';
//     items.lastElementChild.remove();
//     items.children[0].textContent = nameValue
//     items.children[1].textContent = emailValue

//     body.style.background = 'orange';

// });

//ELE ESCUTA AS ALTERAÇÕES DO QUE VAI COLOCANDO.
// nameInput.addEventListener('change', function (event) {
//     console.log(event.target.value);
// })

//CRIANDO UM FORMULARIO E VALIDANDO
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const submitButton = document.querySelector('#submit-button');
// const errorMsg = document.querySelector('.msg');
// const items = document.querySelector('.items');

// submitButton.addEventListener('click', (event) => {
//     event.preventDefault()

//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;

//     if (nameValue === '' || emailValue === '') {
//         errorMsg.textContent = 'Please fill out the fields!';
//         errorMsg.classList = 'error';

//         setTimeout(() => {
//             errorMsg.textContent = '';
//             errorMsg.classList = '';
//         }, 3000);
//         return;
//     }

//     const li = document.createElement('li');
//     li.classList = 'item';
//     li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`

//     items.appendChild(li);

//     nameInput.value = '';
//     emailInput.value = '';
// });

//PRATICAR MUITO
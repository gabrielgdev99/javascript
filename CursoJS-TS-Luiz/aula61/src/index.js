import { name as name2, lastName, age, sum, Person } from "./module1";
import multiply from "./module1";

// import sum from "./module1"; //IMPORTA SÓ O DEFAULT DO MODULO

// import * as MyModule from "./module1";
// console.log(MyModule);

//o "as" importa ou exporta como outro nome o objeto importado

const name = "Joao";
const p1 = new Person("Joao", "Miranda");
console.log(p1);
console.log(name, lastName, age, name2);
console.log(sum(5, 5));
console.log(multiply(5, 5));

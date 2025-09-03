export const name = "Luiz";
export const lastName = "Miranda";
export const age = 30;

export function sum(x, y) {
  return x + y;
}
// export default function sum(x, y) {
//   return x + y;
// }

export class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

export default (x, y) => x * y;

//Usar o default é como se fosse o padrao a ser importado
//Se usar o export antes da expressao utilizada ele ja exporta automaticamente
// export { name as name2, lastName, age, sum };

let varA = 'A';
let varB = 'B';
let varC = 'C';

/* Dessa forma
const temp = varA
varA = varB
varB = varC
varC = temp
*/ 

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)


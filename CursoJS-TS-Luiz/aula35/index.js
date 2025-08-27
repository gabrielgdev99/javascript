// Valor por referencia

// const nomes = ['Sergio', 'Maria', 'Joana', 'Pedro', 'Wallace']
// const novo = nomes.slice(1, 3) //NO SLICE O SEGUNDO TERMO SEMPRE VAI SER -1 DELE, PODE SER USADO VALORES NEGATIVOS TBM
// console.log(novo)

// const nome = 'Luiz Otávio Miranda'
// const novoNome = nome.split(' ')
// console.log(novoNome)

// const novoNome = [ 'Luiz', 'Otávio', 'Miranda' ]
// const nome = novoNome.join(' ')
// console.log(nome)

//SPLICE

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

//EXEMPLO nomes.splice(indice, deletar, elem1, elem2, elem3)
//ELE PODE COMEÇAR NO NEGATIVO MAIS ELE SEMPRE VAI PRA DIREITA NA REMOCAO
// const removidos = nomes.splice(-2, 0) //Number.MAX_VALUE remove até o final começando no indice indicado.
// const removidos = nomes.splice(3, 0, 'Luiz') //ADICIONA NO INDICE 3 (SEM EXCLUIR NENHUM) O VALOR 'LUIZ'
// const removidos = nomes.splice(3, 1, 'Luiz') //ADICIONA NO INDICE 3 MAS REMOVENDO 1 INDICE E COLOCANDO O VALOR 'LUIZ'

//SIMULANDO O PUSH
nomes.splice(nomes.length, 0, 'Luiz') //neste caso é melhor usar o push

console.log(nomes, removidos)
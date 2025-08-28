const product = { name: 'Bowl', price: 2.50}
const product2 = { //... (obj) eu estou copiando o objeto sem a referencia dele, somente os valores
    ...product,
    material: 'Wood' 
}

const product3 = Object.assign({}, product, {color: 'red'}) //OUTRA FORMA DE FAZER A MESMA COISA QUE O SPREAD

const product4 = {name: product.name, price: product.price}

product2.name = 'Cup'
product2.price = 1.50

// Object.freeze(product) //TRANSFORMA O OBJETO EM IMUTAVEL
console.log(product)
console.log(product2)
console.log(product3)
console.log(product4)
console.log(Object.keys(product)) //VE AS CHAVES DO OBJETO
Object.defineProperty(product, 'name', {
    writable: true,
    configurable: true,
    value: 'Another thing'
})
console.log(Object.getOwnPropertyDescriptor(product, 'name')) //ACESSA AS PROPERTIES DA CHAVE DO OBJETO
console.log(Object.values(product)) //ACESSA OS VALORES DA CHAVE DO OBJETO
console.log(Object.entries(product)) //ACESSA O OBJETO COMPLETO MAS MOSTRA EM ARRAYS

for (let [keys, value] of Object.entries(product2)) {
    console.log(keys, value)
}


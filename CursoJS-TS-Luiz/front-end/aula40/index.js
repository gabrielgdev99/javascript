//OBJECT.DEFINEPROPERTY E OBJECT.DEFINEPROPERTIES
function Product(name, price, stock) {

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name, 
            writable: true, 
            configurable: true
        },
        price: {
            enumerable: true,
            value: price, 
            writable: true, 
            configurable: true
        }
    })

    Object.defineProperty(this, 'stock', {
        enumerable: true, //MOSTRA A CHAVE NO INDICE
        value: stock, //VALOR DA CHAVE
        writable: false, //CONTROLA SE O VALOR PODE SER ALTERADO POSTERIORMENTE OU NAO
        configurable: false //DECLARA SE PERMITE OU NAO QUE A VARIAVEL PODE SER RECONFIGURADA E NEM PERMITE QUE ELA SEJA APAGADA
    })
}

const product1 = new Product('Shirt', 20, 3)
console.log(product1)
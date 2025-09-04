//GETTER E SETTERS
function Product(name, price, stock) {

    this.name = name
    this.price = price

    let privateStock = stock

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() { //GERALMENTE O TRABALHO DO GETTER VAI SER PEGAR O QUE ESTA E EXIBIR ELE
            return privateStock
        },
        set: function(value) { //MODIFICA O VALOR
            if (typeof value !== 'number') {
                throw new TypeError('Error')
            }
            privateStock = value
        }
    })
}

const product1 = new Product('Shirt', 20, 3)
product1.stock = 'The value that I want.'
console.log(product1.stock)
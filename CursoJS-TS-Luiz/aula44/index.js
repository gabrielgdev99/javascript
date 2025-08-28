//PROTOTYPES

const objA = {
    keyA: 'A'
}
const objB = {
    keyB: 'B'
}
const objC = {
    keyC: 'C'
}

Object.setPrototypeOf(objB, objA) //CONFIGURA O OBJETO PROTOTYPE DE B SENDO IGUAL AO DED A
Object.setPrototypeOf(objC, objB)

function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.descount = function(percent) {
    return this.price = this.price * (this.price * (percent / 100))
}
Product.prototype.rise = function(percent) {
    return this.price = this.price + (this.price * (percent / 100))
}

const product1 = new Product('Pencil', 3)

//Literal - setando o prototype de um objeto literal em um prototype de uma funcao construtora
const product2 = {
    name: 'Mug',
    price: 30
}
Object.setPrototypeOf(product2, Product.prototype)

const product3 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Book'
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})


console.log(product1)
console.log(product2)
console.log(product3)
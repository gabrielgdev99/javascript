//Produto -> aumento, desconto
// Camiseta = cor,  caneca = material
//HERANÇA É HERDAR UMA PARTE DE UMA FUNCAO CONSTRUTORA E CRIAR UMA NOVA FUNCAO COM OUTRAS ESPECIFICACOES DIFERENTES

function Product(name, price) {
    this.name = name
    this.price = price

}

Product.prototype.rise = function(percent) {
    return this.price = this.price + (this.price * (percent / 100))
}

Product.prototype.descount = function(percent) {
    return this.price = this.price - (this.price * (percent / 100))
}

function Shirt(name, price, color) {
    Product.call(this, name, price)
    this.color = color
}

//SETA QUE O PROTOTYPE É O MESMO DO PRODUCT MAS NA SEGUNDA LINHA FALA QUE O CONSTRUCTOR DE PRODUTOS DESSA FUNCAO É DELA E NAO DA PRIMEIRA
Shirt.prototype = Object.create(Product.prototype)
Shirt.prototype.constructor = Shirt

function Mug(name, price, material, stock) {
    Product.call(this, name, price)
    this.material = material

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock
        },
        set: function(value) {
            if (typeof value !== 'number') return
            stock = value
        }
    })
}

Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug

const product = new Product('Gen', 10)
const shirt = new Shirt('Shirt', 15, 'Black')
const mug = new Mug('Mug', 12, 'Steel', 5)
mug.stock = 'Test'
mug.stock = 100 //SETTER

console.log(product)
console.log(shirt)
console.log(mug)
console.log(mug.stock) //GETTER
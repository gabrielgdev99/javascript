//CLASSES

// class Person {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }

//     get fullName() {
//         return `${this.name} ${this.lastName}`
//     }

//     set fullName(value) {
//         value = value.split(' ')
//         this.name = value.shift()
//         this.lastName = value.join(' ')
//     }

//     speak() {
//         console.log(`${this.name} are talking.`)
//     }
    
//     eat() {
//         console.log(`${this.name} are eating.`)
//     }

//     drink() {
//         console.log(`${this.name} are drinking.`)
//     }

// }

// const p1 = new Person('Luiz', 'Miranda')
// console.log(p1)
// console.log(p1.speak())
// console.log(p1.fullName)
// console.log(p1.lastName)





//GETEERS E SETTERS

//SYMBOL PODE SER UTILIZADO PARA CRIAR UMA PROPRIEDADE PRIVADA DENTRO DO SEU OBJETO

// const _speed = Symbol()

// class Car {
//     constructor(name) {
//         this.name = name
//         this[_speed] = 0
//     }

//     set speed(value) {
//         if (typeof value !== 'number') return
//         if (value >= 100 || value <0) return
//         this[_speed] = value
//     }

//     //SE VC QUISER ACESSAR A VELOCIDADE FORA DO OBJETO
//     get speed() {
//         return this[_speed]
//     }

//     acelerate() {
//         if (this[_speed] >= 100) return
//         this[_speed]++
//     }

//     break() {
//         if (this[_speed] <= 100) return
//         this[_speed]--
//     }
// }

// const car1 = new Car('Fusca', 0)

// for (let i = 0; i <= 200; i++) {
//     car1.acelerate()
// }

// //ACESSANDO SETTER e ja valida o valor conforme acima
// car1.speed = 99
// console.log(car1)
// //ACESSANDO GETTER
// console.log(car1.speed)




//HERANÇAS COM CLASSES

class Device {
    constructor(name) {
        this.name = name
        this.power = false
    }

    turnOn() {
        if(this.power) {
            console.log(`${this.name} already on.`)
            return
        }

        this.power = true
    }

    turnOff() {
        if(!this.power) {
            console.log(`${this.name} already oFF.`)
            return
        }

        this.power = false
    }
}

//CRIANDO UMA CLASS E PUXANDO INFORMACOES DA CLASSE PAI
class Smartphone extends Device {
    constructor(name, color, model) {
        super(name) //É DESTA MANEIRA QUE CHAMAMOS O QUE JA CONSTA NA CLASSE PAI PARA COPIARA PARA O FILHO
        this.color = color
        this.model = model
    }
}

//CRIANDO UMA CLASS E PUXANDO INFORMACOES DA CLASSE PAI
class Tablet extends Device {
    constructor(name, size) {
        super(name) //É DESTA MANEIRA QUE CHAMAMOS O QUE JA CONSTA NA CLASSE PAI PARA COPIARA PARA O FILHO
        this.size = size
    }

    sayHi() {
        console.log('This method is only available on tablet.')
    }
}


const t1 = new Tablet('iPad', '168gb')

t1.sayHi()
console.log(t1)






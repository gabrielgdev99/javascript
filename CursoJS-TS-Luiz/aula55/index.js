//PROMISSES, USADO PARA COISAS ASSINCRONAS

function alet(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad value')
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, time)
    })
}

//METODOS UTEIS PARA PROMISSES
//promise.all / promise.race / promise.resolve / promise.reject

const promises = [
    'First value',
    wait('First promise', alet(1, 5)),
    wait('Second promise', alet(1, 5)),
    wait('Third promise', alet(1, 5)),
    // wait(1000, 1),
    'Another value'
]

//NO ALL VC MANDA RESOLVER TODAS AS PROMISSES DA VARIAVEL promises E JA RETORNA OS VALORES DAS RESPECTIVAS
Promise.all(promises).then(function(value) {
    console.log(value)
}).catch(function(error) {
    console.log(error)
})

//NO RACE ELE VAI MOSTRAR A PRIMEIRA QUE RESOLVER E MOSTRAR
Promise.race(promises).then(function(value) {
    console.log(value)
}).catch(function(error) {
    console.log(error)
})


//NO .RESOLVE E .REJECT JA DEFINE QUE VAI RETORNAR A PROMISE REJEITA OU RESOLVIDA
function pag() {
    const inCach = true //SIMULANDO UMA PAGINA EM CACHE

    if(inCach) {
        // return Promise.resolve('Pagina em cache')
        return Promise.reject('Pagina em cache')
    } else {
        return wait('Baixei a pagina', 3000)
    }
}

pag().then(pagData => {
    console.log(pagData)
})
.catch(e => console.log('Erro', e))



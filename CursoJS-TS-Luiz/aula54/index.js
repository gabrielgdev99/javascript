//PROMISSES, USADO PARA COISAS ASSINCRONAS

function alet(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad value')

        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

//SEMPRE QUE RESOLVERMOS NA NOSSA RESOLVE, SERÁ EXECUTADO O .then
wait('BACKEND', alet(1, 3))
.then(response => {
    console.log(response)
    return wait('Conecting to BD', alet(1, 3))
})
.then(response => {
    console.log(response)
    return wait('Searching data', alet(1, 3)) //COLOCAR NUMERO CASO QUEIRA TESTAR O REJECT .catch
})
.then(response => {
    return response + ', just one minute'
})
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log('ERRO', e)
})

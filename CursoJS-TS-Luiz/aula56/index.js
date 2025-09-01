//PROMISSES, USADO PARA COISAS ASSINCRONAS

function alet(min = 0, max = 3) {
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

// wait('Frase 1', alet())
// .then(value => {
//     console.log(value)
//     return wait('Frase 2', alet())
// })
// .then(phase => {
//     console.log(phase)
//     return wait('Frase 3', alet())
// })
// .then(phase => {
//     console.log(phase)
//     return phase
// })
// .then(phase => {
//     console.log('Terminou')
// })
// .catch(e => console.log(e))



//USANDO ASYNC

async function exec() {
    try {
        const phase1 = await wait('Frase 1', alet())
        console.log(phase1)
    
        const phase2 = await wait('Frase 2', alet())
        console.log(phase2)
    
        const phase3 = await wait('Frase 3', alet())
        console.log(phase3)
    
        console.log('Terminanos')
    } catch(e) {
        console.log(e)
    }
}

exec()
    
//RECARREGANDO SOMENTE UM COMPONENTE DA PAGINA


const request = obj => {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                res(xhr.responseText)
            } else {
                rej(xhr.statusText)
            }
        })
    }
)}        


document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregapag(el)
    }
})

async function carregapag(el) {
    const href = el.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
    const response = await request(objConfig)
    {carregaResult(response)}
    } catch(e) {
        console.log(e)
    }
}

function carregaResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}
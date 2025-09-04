class RemoteControl {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    increaseVolume () {
        this.volume += 2
    }
    decreaseVolume () {
        this.volume -= 2
    }

    //METODO ESTATICO, FUNCIONA PARA A CLASSE E NAO INSTANCIA E NESTE CASO NAO TERA ACESSO AOS DADOS DOS OBJETOS
    static pileExchange() {
        console.log('Control stack exchanged')
    }
}

const cont1 = new RemoteControl('Samsung')

cont1.increaseVolume()
cont1.increaseVolume()
cont1.increaseVolume()
cont1.increaseVolume()
console.log(cont1)
RemoteControl.pileExchange()
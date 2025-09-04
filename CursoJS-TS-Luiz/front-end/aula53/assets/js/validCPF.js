class ValidCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cleanCpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    valid() {
    if (typeof this.cleanCpf === 'undefined') return false
    if (this.cleanCpf.length !== 11) return false
    if (this.isSequence()) return false

    const ParcCpf = this.cleanCpf.slice(0, -2)
    const digit1 = ValidCPF.createDigit(ParcCpf)
    const digit2 = ValidCPF.createDigit(ParcCpf + digit1)
    
    const newCpf = ParcCpf + digit1 + digit2
    return newCpf === this.cleanCpf
    }

    //COMO NAO USA NADA DO THIS, ISSO PODE SER UM STATIC
    static createDigit(parcCpf) {
    const cpfArray = Array.from(parcCpf)
    let regressive = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val))
        regressive--
        return ac
    }, 0)

    const digit = 11 - (total % 11)
    return digit > 9 ? '0' : String(digit)
    }

    isSequence() {
    return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf
    }

}

// const cpf = new ValidCPF('070.987.720-03')

// if(cpf.valid()) {
//     console.log('CPF válido')
// } else {
//     console.log('CPF inválido')
// }


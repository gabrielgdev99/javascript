//VALIDACAO DE CPF
// 705.484.450-52 e 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito) -> se esse numero for maior que 9 ele é zero

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo digito) -> se esse numero for maior que 9 ele é zero

*/

function ValidCPF(SendCpf) {
    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function() {
            return SendCpf.replace(/\D+/g, '')
        }
    })
}

ValidCPF.prototype.valid = function() {
    if (typeof this.cleanCpf === 'undefined') return false
    if (this.cleanCpf.length !== 11) return false
    if (this.isSequence()) return false

    const ParcCpf = this.cleanCpf.slice(0, -2)
    const digit1 = this.createDigit(ParcCpf)
    const digit2 = this.createDigit(ParcCpf + digit1)
    
    const newCpf = ParcCpf + digit1 + digit2
    return newCpf === this.cleanCpf
}

ValidCPF.prototype.createDigit = function(parcCpf) {
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

ValidCPF.prototype.isSequence = function() {
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length)
    return sequence === this.cleanCpf
}


const cpf = new ValidCPF('0570309827')

if(cpf.valid()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}


class ValidForm {
    constructor(){
        this.form = document.querySelector('.form')

        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        const validFields = this.checkFields()
        const validsPassword = this.validsPassword()

        if(validFields && validsPassword) {
            alert('Formulário enviado.')
            this.form.submit()
        }
    }

    validsPassword() {
        let valid = true

        const password = this.form.querySelector('.password')        
        const repeatpassword = this.form.querySelector('.repeatpassword')
        
        if(password.value !== repeatpassword.value) {
            valid = false
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais')
            this.createError(repeatpassword, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false
            this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres.')

        }

        return valid
    }

    checkFields() {
        let valid = true

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerText
            if(!field.value) {
                this.createError(field, `Campo ${label} não pode estar em branco`)
                valid = false
            }

            if(field.classList.contains('cpf')) {
                if(!this.validCPF(field)) valid = false
            }

            if(field.classList.contains('user')) {
                if(!this.validUser(field)) valid = false
            }
        }

        return valid
    }

    validCPF(field) {
        const cpf = new ValidCPF(field.value)

        if(!cpf.valid()) {
            this.createError(field, 'CPF inválido')
        }

        return valid
    }

    validUser(field) {
        const user = field.value
        let valid = true
        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'O usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!user.match(/[a-zA-Z0-9]+/g)) {
            this.createError(field, 'Nome de usuário precisa conter apenas letras e/ou números.')
            valid = false
        }

        return valid
    }

    createError(field, msg) {

        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)

    }
}

const valid = new ValidForm()
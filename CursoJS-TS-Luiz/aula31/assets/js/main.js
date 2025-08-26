//SO PARA EXEMPLIFICAR A FUNCTION FACTORY
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),

        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delDisplay();
                }
                if (el.classList.contains('btn-eq')) {
                    this.eqDisplay();
                }


            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.eqDisplay();
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        
        clearDisplay() {
            this.display.value = '';
        },

        delDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        eqDisplay() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        }
    };
}


const calculadora = criaCalculadora();
calculadora.inicia();
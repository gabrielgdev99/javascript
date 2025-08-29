//POLIFORMISMO

//Class
function Account(agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.draw = function(value) {
    if (this.balance < value) {
        console.log(`Insufficient balance: R$${this.balance.toFixed(2)}`)
        return
    }

    this.balance -= value
    this.seeBalance()
}

Account.prototype.deposit = function(value) {
    this.balance += value
    this.seeBalance()
}

Account.prototype.seeBalance = function() {
    console.log(`Ag/c: ${this.agency}/${this.account}` + ` | Saldo: R$${this.balance.toFixed(2)}`)
}



function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance)
    this.limit = limit
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.constructor = CurrentAccount

CurrentAccount.prototype.draw = function(value) {
    if ((this.balance + this.limit) < value) {
        console.log(`Insufficient balance: R$${(this.balance + this.limit).toFixed(2)}`)
        return
    }

    this.balance -= value
    this.seeBalance()
}


const account1 = new CurrentAccount(1271, 8648, 347, 100)
account1.draw(447)
account1.seeBalance()



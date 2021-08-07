class Funcionario {

    constructor(email) {
        this._email = email
    }

    get email() {
        return this._email
    }

    set email(email) {
        this._email = email
    }
}

let funcionarioProxy = new Proxy(new Funcionario('fulano@email.com'), {
    set(target, prop, value, receiver) {
        console.log(`A propriedade "${prop}" está sendo modificada.`)
        console.log(`Valor anterior: ${target[prop]}`)

        return Reflect.set(target, prop, value, receiver)
    }
})


funcionarioProxy.email = 'ciclano@email.com'
console.log(`Novo valor ${funcionarioProxy.email}`)
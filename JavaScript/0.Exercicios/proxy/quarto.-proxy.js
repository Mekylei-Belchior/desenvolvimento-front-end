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


let funcionarioProxy = new Proxy(new Funcionario('email@email.com'), {
    get(target, prop, receiver) {
        console.log('Armadilha aqui!')
        console.log(prop)

        return Reflect.get(target, prop, receiver)
    }
})

console.log(funcionarioProxy.email)
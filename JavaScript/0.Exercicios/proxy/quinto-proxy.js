let funcionario = { email: 'fulano@email.com' }

let funcionarioProxy = new Proxy(funcionario, {
    set(target, prop, value, receiver) {
        console.log(`Valor anterior: ${target[prop]}`)

        return Reflect.set(target, prop, value, receiver)
    }
})

funcionarioProxy.email = 'ciclano@email.com'

console.log(funcionarioProxy.email)
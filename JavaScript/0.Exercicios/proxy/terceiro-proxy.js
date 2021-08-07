let funcionario = { nome: 'Fulano', email: 'email@email' }

let funcionarioProxy = new Proxy(funcionario, {
    set(target, prop, value, receiver) {
        console.log('Armadilha aqui!')

        return Reflect.set(target, prop, value, receiver)
    }
})

funcionarioProxy.email = '**email@email.com**'

console.log(funcionarioProxy.email)
console.log(funcionario.nome)
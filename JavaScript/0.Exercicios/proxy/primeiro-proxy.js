let funcionario = { usuario: 'Alguém', email: 'email@email.com' }

/**
 * Cria um proxy para encapsular o objeto funcionário
 */
let funcionarioProxy = new Proxy(funcionario, {
    get(target, prop, receiver) {
        console.log('Armadilha aqui!')

        return Reflect.get(target, prop, receiver)
    }

})

console.log(funcionarioProxy.usuario)
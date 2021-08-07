class ProxyFactory {

    /**
     * Cria um proxy
     * 
     * @param {*} objeto ao qual será encapsulado pelo proxy 
     * @param {*} props Array com as propriedades que serão observadas pelo proxy
     * @param {*} acao que será executada quando as propriedades e métodos do objeto forem acessado(a)s
     * @returns um proxy com a ação correspondente
     */
    static cria(objeto, props, acao) {

        return new Proxy(objeto, {
            // Para quando interceptar ações em métodos
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function () {
                        Reflect.apply(target[prop], target, arguments)
                        return acao(target)
                    }
                }

                return Reflect.get(target, prop, receiver)
            },

            // Para quando interceptar ações em propriedades
            set(target, prop, value, receiver) {
                if (props.includes(prop)) {
                    target[prop] = value
                    return acao(target)
                }

                return Reflect.set(target, prop, value, receiver)
            }
        })

    }

    /**
     * Verifica se é uma função
     * 
     * @param {*} func função 
     * @returns (true) se for uma função. Do contrário, (false)
     */
    static _ehFuncao(func) {
        return typeof (func) == typeof (Function)
    }
}
class Bind {
    /**
     * Cria um proxy quando esta classe for instânciada
     * 
     * @param {*} modelo instância do objeto que será encapsulado pelo proxy 
     * @param {*} view instância do objeto que irá receber a ação
     * @param {*} props métodos ou propriedades do (modelo)
     * @returns o proxy criado
     */
    constructor(modelo, view, ...props) {

        let proxy = ProxyFactory
            .cria(
                modelo,
                props,
                modelo => view.atualiza(modelo)
            )

        // Realiza a ação
        view.atualiza(modelo)

        return proxy
    }
}
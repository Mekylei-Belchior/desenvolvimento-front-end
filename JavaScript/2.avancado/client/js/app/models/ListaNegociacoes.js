class ListaNegociacoes {

    constructor() {

        this._negociaoes = []

    }

    /**
     * Adiciona uma nova negociação a lista de negociações
     * 
     * @param {*} negociacao instância de (Negociação)
     */
    adicionaNegociacao(negociacao) {
        this._negociaoes.push(negociacao)
    }

    /**
     * Devolve uma nova referência da lista de negociações
     */
    get negociacoes() {
        return [].concat(this._negociaoes)
    }

    /**
     * Devolve o volume total
     */
    get volumeTotal() {
        return this._negociaoes.reduce((total, n) => total + n.volume, 0.0)
    }

    /**
     * Limpa a lista de negociações atribuíndo uma lista vazia
     */
    limpa() {
        this._negociaoes = []
    }
}
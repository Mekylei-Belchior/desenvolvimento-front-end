class ListaNegociacoes{

    constructor(gatilho){

        this._negociaoes = []
        // Função recebida como argumento na inicializaçaõ da classe
        // Será utilizada como gatilho para disparar atualizações da view de negociações
        this._gatilho = gatilho
    }

    /**
     * Adiciona uma nova negociação a lista de negociações
     * @param {*} negociacao instância de Negociação
     */
    adicionaNegociacao(negociacao){
        this._negociaoes.push(negociacao)
        // Atualiza a lista de negociações após adicionar uma nova negociação
        this._gatilho(this)
    }

    /**
     * Devolve uma nova referência da lista de negociações
     */
    get nogociacoes(){
        return [].concat(this._negociaoes)
    }

    /**
     * Limpa a lista de negociações atribuíndo uma lista vazia
     */
    limpa(){
        this._negociaoes = []
        // Atualiza a lista de negociações após apagar todas as negociações
        this._gatilho(this)
    }
}
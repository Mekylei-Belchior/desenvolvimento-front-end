class NegociacaoController {

    constructor() {
        // Define um alias para o querySelector com referência ao document
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#template-view'))
        this._negociacoesView.atualizar(this._listaNegociacoes)
    }

    /**
     * Adiciona uma nova negociação
     * 
     * @param {*} event evento do formulário
     */
    adiciona(event) {
        // Não submete o formulário (recarreguar a página) e evita que os dados da tabela sejam perdidos
        event.preventDefault()

        this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao())
        this._negociacoesView.atualizar(this._listaNegociacoes)
        this._limpar()
    }

    /**
     * Cria uma nova negociação
     * 
     * @returns a negociação criada
     */
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    /**
     * Limpa os campos do formulário e seta o foco no campo de data
     */
    _limpar() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}
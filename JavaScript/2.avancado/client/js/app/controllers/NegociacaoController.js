class NegociacaoController {

    constructor() {
        // Define um alias para o querySelector com referência ao document
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        // Cria uma lista de negociações através de um proxy
        this._listaNegociacoes = ProxyFactory
            .cria(
                new ListaNegociacoes(),
                ['adicionaNegociacao', 'limpa'],
                modelo => this._negociacoesView.atualiza(modelo)
            )

        // Cria uma mensagem através de um proxy
        this._mensagem = ProxyFactory
            .cria(
                new Mensagem(),
                ['texto'],
                texto => this._mensagemView.atualiza(texto)
            )

        this._negociacoesView = new NegociacoesView($('#template-view'))
        this._negociacoesView.atualiza(this._listaNegociacoes)

        this._mensagemView = new MensagemView($('#mensagem'))
        this._mensagemView.atualiza(this._mensagem)
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
        this._mensagem.texto = 'A negociação foi adicionada com sucesso!'
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
     * Apaga todas as negociações
     */
    apaga() {
        this._listaNegociacoes.limpa()
        this._mensagem.texto = 'A lista de negociações foi apagada com sucesso!'
        this._inputData.focus()
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
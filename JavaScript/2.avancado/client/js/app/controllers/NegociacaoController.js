class NegociacaoController {

    constructor() {
        // Define um alias para o querySelector com referência ao document
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._ordenadoPor = ''

        // Cria a lista de negociações vinculada a sua view
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#template-view')),
            'adicionaNegociacao', 'limpa', 'ordemCrescente', 'ordemDecrescente'
        )

        // Cria mensagens vinculada com sua view
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagem')),
            'texto'
        )
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
     * Importa as negociações do servidor
     */
    importaNegociacoes() {

        let negociacaoService = new NegociacaoService()

        Promise.all(

            [
                negociacaoService.obterNegociacoesDaSemana(),
                negociacaoService.obterNegociacoesDaSemanaAnterior(),
                negociacaoService.obterNegociacoesDaSemanaRetrasada()
            ]

        ).then(negociacoes => {
            negociacoes
                .reduce((negociacoesAgrupadas, negociacao) => negociacoesAgrupadas.concat(negociacao), [])
                .forEach(negociacao => this._listaNegociacoes.adicionaNegociacao(negociacao))

            this._mensagem.texto = 'As negociações foram importadas com sucesso!'
            this._inputData.focus()
        }).catch(erro => this._mensagem.texto = erro)
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
     * Ordena as negociações conforme coluna selecionada
     * 
     * @param {*} coluna que servirá como referência para a ordenação
     */
    ordena(coluna) {
        if (this._ordenadoPor == coluna) {
            this._listaNegociacoes.ordemDecrescente()
        } else {
            this._listaNegociacoes.ordemCrescente((a, b) => a[coluna] - b[coluna])
        }

        this._ordenadoPor = coluna
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
class NegociacaoController {

    constructor() {
        // Define um alias para o querySelector com referência ao document
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault()
        
        let data = new Date(
            ...this._inputData.value 
            .split('-')
            .map((valor, indice) => valor - indice % 2)
        )

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        )

        this.limpar()

        return negociacao
    }

    limpar() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0
        this._inputData.focus()
    }
}
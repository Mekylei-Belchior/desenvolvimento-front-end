class Negociacao {

    constructor(data, quantidade, valor) {
        // Atribui uma nova instância da data recebida como parâmetro
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor

        // Define que a instância da classe não seja modificado após a inicialização 
        Object.freeze(this)
    }

    get volume() {
        return this._quantidade * this._valor
    }

    /**
     * Return uma nova instância da data setada no construtor
     * 
     */
    get data() {
        return new Date(this._data.getTime())
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }
}
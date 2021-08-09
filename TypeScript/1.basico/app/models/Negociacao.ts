export class Negociacao {

    private _data
    private _quantidade
    private _valor

    /**
     * Construtor que inicializa as propriedades quando a classe é instânciada 
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(data, quantidade, valor) {
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    /**
     * Devolve a data da negociação
     */
    get data() {
        return this._data
    }

    /**
     * Devolve a quantidade negociada
     */
    get quantidade() {
        return this._quantidade
    }

    /**
     * Devolve o custo por unidade
     */
    get valor() {
        return this._valor
    }

    /**
     * Devolve o volume negociado
     */
    get volume() {
        return this._quantidade * this._valor
    }
}
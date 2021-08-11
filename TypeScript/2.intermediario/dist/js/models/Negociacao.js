export class Negociacao {
    /**
     * Construtor que inicializa as propriedades de uma negociação quando a classe é instânciada
     *
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    /**
     * Devolve a data da negociação
     *
     * Devolve uma nova referência da data da negociação evitando
     * que a referência inicial não seja alterada
     */
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    /**
     * Devolve a quantidade negociada
     */
    get quantidade() {
        return this._quantidade;
    }
    /**
     * Devolve o custo por unidade
     */
    get valor() {
        return this._valor;
    }
    /**
     * Devolve o volume negociado
     */
    get volume() {
        return this._quantidade * this._valor;
    }
    /**
     * Cria uma nova negociação
     *
     * @returns uma (Negociação)
     */
    static cria(dataString, quantidadeString, valorString) {
        const data = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}

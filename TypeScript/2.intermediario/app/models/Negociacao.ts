export class Negociacao {

    /**
     * Construtor que inicializa as propriedades de uma negociação quando a classe é instânciada 
     * 
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number) { }

    /**
     * Devolve a data da negociação
     * 
     * Devolve uma nova referência da data da negociação evitando
     * que a referência inicial não seja alterada
     */
    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    /**
     * Devolve a quantidade negociada
     */
    public get quantidade(): number {
        return this._quantidade;
    }

    /**
     * Devolve o custo por unidade
     */
    public get valor(): number {
        return this._valor;
    }

    /**
     * Devolve o volume negociado
     */
    public get volume(): number {
        return this._quantidade * this._valor;
    }
}
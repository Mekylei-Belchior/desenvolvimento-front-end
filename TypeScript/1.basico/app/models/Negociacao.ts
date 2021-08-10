export class Negociacao {

    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    /**
     * Construtor que inicializa as propriedades de uma negociação quando a classe é instânciada 
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    /**
     * Devolve a data da negociação
     */
    get data(): Date {
        return this._data;
    }

    /**
     * Devolve a quantidade negociada
     */
    get quantidade(): number {
        return this._quantidade;
    }

    /**
     * Devolve o custo por unidade
     */
    get valor(): number {
        return this._valor;
    }

    /**
     * Devolve o volume negociado
     */
    get volume(): number {
        return this._quantidade * this._valor;
    }
}
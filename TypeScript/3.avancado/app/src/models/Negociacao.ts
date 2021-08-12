import { Imprimivel } from "../utils/Imprimivel.js";

export class Negociacao extends Imprimivel {

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
        private _valor: number) { super(); }

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

    /**
     * Devolve a representação de uma negociação
     */
    public paraTexto(): string {
        return `
            Data: ${this._data},
            Qauntidade: ${this._quantidade},
            Valor: ${this._valor}
            `;
    }

    /**
     * Cria uma nova negociação
     * 
     * @returns uma (Negociação)
     */
    public static cria(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const data = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(data, quantidade, valor);
    }
}
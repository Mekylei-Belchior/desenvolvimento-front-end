export class Negociacao {

    #data
    #quantidade
    #valor

    /**
     * Construtor que inicializa as propriedades quando a classe é instânciada 
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(data, quantidade, valor) {
        this.#data = data
        this.#quantidade = quantidade
        this.#valor = valor
    }

    /**
     * Devolve a data da negociação
     */
    get data() {
        return this.#data
    }

    /**
     * Devolve a quantidade negociada
     */
    get quantidade() {
        return this.#quantidade
    }

    /**
     * Devolve o custo por unidade
     */
    get valor() {
        return this.#valor
    }

    /**
     * Devolve o volume negociado
     */
    get volume() {
        return this.#quantidade * this.#valor
    }
}
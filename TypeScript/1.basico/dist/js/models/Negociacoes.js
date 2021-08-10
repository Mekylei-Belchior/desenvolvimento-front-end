export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    /**
     * Adiciona a negociação a lista de negociações
     *
     * @param negociacao que será adicionada a lista
     */
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    /**
     * Recupera a lisat de negociações
     * @returns a lista com as negociações existentes
     */
    lista() {
        return this.negociacoes;
    }
}

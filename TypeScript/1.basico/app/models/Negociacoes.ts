import { Negociacao } from "./Negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    /**
     * Adiciona a negociação a lista de negociações
     * 
     * @param negociacao que será adicionada a lista
     */
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    /**
     * Recupera a lisat de negociações
     * @returns a lista com as negociações existentes
     */
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}
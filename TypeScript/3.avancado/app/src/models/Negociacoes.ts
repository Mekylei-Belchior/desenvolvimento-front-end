import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {

    private negociacoes: Array<Negociacao> = [];

    /**
     * Adiciona a negociação a lista de negociações
     * 
     * @param negociacao que será adicionada a lista
     */
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    /**
     * Recupera a lista de negociações
     * 
     * @returns a lista com as negociações existentes somente como leitura
     */
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    /**
     * Devolve uma representação de uma lista de negociações
     */
    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    /**
     * Compara se uma lista de negociações é igual a outra lista de negociações.
     * 
     * @param negociacoes array de negociações.
     * 
     * @returns (true) se forem iguais e (false) se forem diferentes.
     */
    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
}
import { Imprimivel } from "../utils/Imprimivel.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes extends Imprimivel {

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
     * Recupera a lisat de negociações
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
}
import { NegociacaoAPI } from "../interfaces/NegociacaoAPI.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacoesService {

    /**
     * Recupera as negociações de uma API
     * 
     * @returns uma promise das negociações.
     */
    public obterNegociacoesAPI(): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(dados => dados.json())
            .then((listaNegociacoes: NegociacaoAPI[]) => {
                return listaNegociacoes.map(negociacao => {
                    return new Negociacao(new Date(), negociacao.vezes, negociacao.montante);
                });
            })
    }
}
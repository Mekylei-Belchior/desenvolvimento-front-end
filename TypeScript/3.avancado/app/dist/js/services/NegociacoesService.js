import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obterNegociacoesAPI() {
        return fetch('http://localhost:8080/dados')
            .then(dados => dados.json())
            .then((listaNegociacoes) => {
            return listaNegociacoes.map(negociacao => {
                return new Negociacao(new Date(), negociacao.vezes, negociacao.montante);
            });
        });
    }
}

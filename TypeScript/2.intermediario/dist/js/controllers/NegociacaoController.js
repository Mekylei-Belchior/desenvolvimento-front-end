import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
export class NegociacaoController {
    /**
     * Construtor
     *
     * Inicializa as propriedades com os campos do formulário
     */
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#tabela');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.atualiza();
    }
    /**
     * Adiciona uma nova negociações a lista de negociações
     */
    adiciona() {
        this.negociacoes.adiciona(this.criaNegociacao());
        this.limpa();
    }
    /**
     * Cria uma nova negociação
     *
     * @returns uma (Negociação)
     */
    criaNegociacao() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    /**
     * Limpa os dados do formulário
     */
    limpa() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}

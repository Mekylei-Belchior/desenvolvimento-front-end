import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#tabela');
    private mensagem = new MensagemView('#mensagem');

    /**
     * Construtor
     * 
     * Inicializa as propriedades com os campos do formulário
     */
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.atualiza(this.negociacoes);
    }

    /**
     * Adiciona uma nova negociações a lista de negociações
     */
    adiciona(): void {
        this.negociacoes.adiciona(this.criaNegociacao());
        this.negociacoesView.atualiza(this.negociacoes);
        this.mensagem.atualiza('Negociação criada com sucesso!');
        this.limpa();
    }

    /**
     * Cria uma nova negociação
     * 
     * @returns uma (Negociação)
     */
    criaNegociacao(): Negociacao {

        const data = new Date(this.inputData.value.replace(/-/g, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(data, quantidade, valor);
    }

    /**
     * Limpa os dados do formulário
     */
    limpa(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}
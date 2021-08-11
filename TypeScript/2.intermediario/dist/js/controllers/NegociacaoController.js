import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
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
        this.mensagem = new MensagemView('#mensagem');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.atualiza(this.negociacoes);
    }
    /**
     * Adiciona uma nova negociações a lista de negociações se a mesma foi feita
     * entre segunda-feria e sexta-feira
     */
    adiciona() {
        const negociacao = Negociacao.cria(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagem.atualiza('Aceita somente negociações realizadas de Segunda a Sexta.');
            this.limpa();
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.atualiza(this.negociacoes);
        this.mensagem.atualiza('A negociação foi criada com sucesso!');
        this.limpa();
    }
    /**
     * Verifica se a data é um dia útil
     *
     * @param data a ser verificada
     * @returns true se o dia estiver entre segunda-feira e sexta-feira. Do contrário, false.
     */
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
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

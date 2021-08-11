import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#tabela');
        this.mensagem = new MensagemView('#mensagem');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.atualiza(this.negociacoes);
    }
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
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
    limpa() {
        this.inputData.value = '';
        this.inputQuantidade.value = '1';
        this.inputValor.value = '0.0';
        this.inputData.focus();
    }
}

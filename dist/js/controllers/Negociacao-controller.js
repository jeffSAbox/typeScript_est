import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new negociacoesView("#listaNegociacoes", true);
        this.mensagemView = new mensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.listaNegociacoes = new Negociacoes();
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionar() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        const valor = parseFloat(this.inputValor.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        const negociacao = Negociacao.criaDe(data, quantidade, valor);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas dias úteis são aceito.');
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        this.mensagemView.update("Negociação adicionada com sucesso!");
        this.chamarUpdate();
        this.limparForm();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.SABADO
            && data.getDay() < DiasDaSemana.DOMINGO;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    chamarUpdate() {
        this.negociacoesView.update(this.listaNegociacoes);
    }
}

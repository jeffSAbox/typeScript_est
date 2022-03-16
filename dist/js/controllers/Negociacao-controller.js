import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new negociacoesView("#listaNegociacoes");
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.listaNegociacoes = new Negociacoes();
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.listaNegociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.listaNegociacoes);
        this.limparForm();
    }
    criarNegociacao() {
        const data = new Date(this.inputData.value.replace(/-/g, ','));
        const valor = parseFloat(this.inputValor.value);
        const quantidade = parseInt(this.inputQuantidade.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

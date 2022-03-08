import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
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

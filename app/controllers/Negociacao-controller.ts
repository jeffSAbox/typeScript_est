import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController
{
    private inputData: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;

    private listaNegociacoes: Negociacoes;

    private negociacoesView = new negociacoesView("#listaNegociacoes");
    private mensagemView = new mensagemView('#mensagemView');

    public constructor()
    {
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");

        this.listaNegociacoes = new Negociacoes();
        
        this.negociacoesView.update(this.listaNegociacoes);
    }

    public adicionar(): void
    {

        const negociacao = this.criarNegociacao(); 
        this.listaNegociacoes.adiciona(negociacao);

        this.negociacoesView.update(this.listaNegociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");

        this.limparForm();

    }

    public criarNegociacao(): Negociacao
    {
        const data = new Date(this.inputData.value.replace(/-/g, ','));

        const valor = parseFloat(this.inputValor.value);

        const quantidade = parseInt(this.inputQuantidade.value);

        return new Negociacao(data, quantidade, valor);
    }

    public limparForm(): void
    {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();

    }
}
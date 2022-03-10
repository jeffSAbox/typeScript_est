import { Negociacao } from "./Negociacao.js";

export class Negociacoes
{
    private listaNegociacoes: Negociacao[] = [];

    adiciona($negociacao: Negociacao)
    {
        this.listaNegociacoes.push($negociacao);
    }

    lista(): readonly Negociacao[]
    {
        return this.listaNegociacoes;
    }
}
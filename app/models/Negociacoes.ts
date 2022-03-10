import { Negociacao } from "./Negociacao.js";

export class Negociacoes
{
    private listaNegociacoes: Array<Negociacao> = [];

    adiciona($negociacao: Negociacao)
    {
        this.listaNegociacoes.push($negociacao);
    }

    lista(): ReadonlyArray<Negociacao>
    {
        return this.listaNegociacoes;
    }
}
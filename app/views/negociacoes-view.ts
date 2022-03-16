import { Negociacoes } from "../models/Negociacoes";

export class negociacoesView
{

    private elementoHtml: HTMLElement;

    constructor(seletor: string)
    {
        this.elementoHtml = document.querySelector(seletor);
    }

    template(listaNegociacoes: Negociacoes): string
    {
        return `
            <table class='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${listaNegociacoes.lista().map(negociacao => {
                        return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(listaNegociacoes: Negociacoes): void
    {
        this.elementoHtml.innerHTML = this.template(listaNegociacoes);
    }
}
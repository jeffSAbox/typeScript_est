import { Negociacoes } from "../models/Negociacoes";
import { View } from "./view.js";

export class negociacoesView extends View<Negociacoes>
{

    protected template(listaNegociacoes: Negociacoes): string
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
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatarData(data: Date): string
    {
        return Intl.DateTimeFormat().format(data);
    }
    
}
import { View } from "./view.js";
export class negociacoesView extends View {
    template(listaNegociacoes) {
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
    formatarData(data) {
        return Intl.DateTimeFormat().format(data);
    }
}

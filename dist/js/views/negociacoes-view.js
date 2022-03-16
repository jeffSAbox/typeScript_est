export class negociacoesView {
    constructor(seletor) {
        this.elementoHtml = document.querySelector(seletor);
    }
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
    update(listaNegociacoes) {
        this.elementoHtml.innerHTML = this.template(listaNegociacoes);
    }
}

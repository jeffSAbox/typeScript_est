export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(listaNegociacoes) {
        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}

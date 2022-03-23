export class View {
    constructor(seletor, escapar = false) {
        this.escapar = escapar;
        this.elemento = document.querySelector(seletor);
    }
    update(listaNegociacoes) {
        let template = this.template(listaNegociacoes);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}

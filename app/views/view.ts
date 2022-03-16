export abstract class View<T>
{

    protected elemento: HTMLElement;

    constructor(seletor: string)
    {
        this.elemento = document.querySelector(seletor);
    }

    abstract template(listaNegociacoes: T): string;

    update(listaNegociacoes: T): void
    {
        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}
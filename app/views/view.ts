export abstract class View<T>
{

    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar: boolean = false)
    {
        this.escapar = escapar;
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(listaNegociacoes: T): string;

    public update(listaNegociacoes: T): void
    {

        let template = this.template(listaNegociacoes);
        if( this.escapar )
        {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }

        this.elemento.innerHTML = this.template(listaNegociacoes);
    }
}
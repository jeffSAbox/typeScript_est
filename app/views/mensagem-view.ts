import { View } from "./view.js";

export class mensagemView extends View<string>
{

    template(texto: string): string
    {
        return `
            <p class='alert alert-success'>${texto}</p>
        `;
    }

}
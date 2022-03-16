import { View } from "./view.js";
export class mensagemView extends View {
    template(texto) {
        return `
            <p class='alert alert-success'>${texto}</p>
        `;
    }
}

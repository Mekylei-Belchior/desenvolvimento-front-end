export class View {
    constructor(cssID) {
        let elemento = document.querySelector(cssID);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O elemento do seletor ${cssID} não foi encontrado no DOM.`);
        }
    }
    atualiza(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}

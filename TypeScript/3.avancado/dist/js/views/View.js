export class View {
    constructor(cssID, escapar) {
        this.escapar = false;
        let elemento = document.querySelector(cssID);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O elemento do seletor ${cssID} não foi encontrado no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    atualiza(modelo) {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}

export class View {
    /**
     * Construtor
     *
     * @param cssID seletor CSS: id
     */
    constructor(cssID, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(cssID);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    /**
     * Renderiza o elemento HTML
     */
    atualiza(modelo) {
        let template = this.template(modelo);
        // Se true, remove tag (script), se existir, do template
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}

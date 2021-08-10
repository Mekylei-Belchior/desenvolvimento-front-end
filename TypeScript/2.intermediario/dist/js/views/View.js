export class View {
    /**
     * Construtor
     *
     * @param cssID seletor CSS: id
     */
    constructor(cssID) {
        this.elemento = document.querySelector(cssID);
    }
    /**
     * Renderiza o elemento HTML
     */
    atualiza(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}

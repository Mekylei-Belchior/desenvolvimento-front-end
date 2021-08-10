export class View {
    /**
     * Construtor
     *
     * @param cssID seletor CSS: id
     */
    constructor(cssID) {
        this.elemento = document.querySelector(cssID);
    }
}

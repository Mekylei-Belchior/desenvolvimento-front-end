export class View {

    protected elemento: HTMLElement;

    /**
     * Construtor
     * 
     * @param cssID seletor CSS: id 
     */
    constructor(cssID: string) {
        this.elemento = document.querySelector(cssID);
    }
}
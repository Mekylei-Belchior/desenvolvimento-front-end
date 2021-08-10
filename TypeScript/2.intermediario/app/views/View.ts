export abstract class View<Tipo> {

    protected elemento: HTMLElement;

    /**
     * Construtor
     * 
     * @param cssID seletor CSS: id 
     */
    constructor(cssID: string) {
        this.elemento = document.querySelector(cssID);
    }

    /**
     * Renderiza o elemento HTML
     */
    atualiza(modelo: Tipo): void {
        this.elemento.innerHTML = this.template(modelo);
    }

    /**
     * Cria um elemento HTML
     * 
     * @param modelo que servirá de base para criar o elemento HTML
     */
    abstract template(modelo: Tipo): string;
}
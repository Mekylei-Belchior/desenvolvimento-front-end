export abstract class View<Tipo> {

    protected elemento: HTMLElement;

    /**
     * Método construtor que inicializa a(s) propriedades da classe.
     * 
     * @param cssID seletor CSS: id.
     */
    constructor(cssID: string) {
        let elemento = document.querySelector(cssID);

        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw new Error(`O elemento do seletor ${cssID} não foi encontrado no DOM.`);
        }
    }

    /**
     * Renderiza o elemento HTML.
     */
    public atualiza(modelo: Tipo): void {
        this.elemento.innerHTML = this.template(modelo);
    }

    /**
     * Cria um elemento HTML.
     * 
     * @param modelo que servirá de base para criar o elemento HTML.
     */
    protected abstract template(modelo: Tipo): string;
}
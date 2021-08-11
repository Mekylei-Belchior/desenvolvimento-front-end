export abstract class View<Tipo> {

    protected elemento: HTMLElement;
    private escapar = false;

    /**
     * Construtor
     * 
     * @param cssID seletor CSS: id 
     */
    constructor(cssID: string, escapar?: boolean) {
        this.elemento = document.querySelector(cssID);

        if (escapar) {
            this.escapar = escapar;
        }
    }

    /**
     * Renderiza o elemento HTML
     */
    public atualiza(modelo: Tipo): void {
        let template = this.template(modelo);

        // Se true, remove tag (script), se existir, do template
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
    }

    /**
     * Cria um elemento HTML
     * 
     * @param modelo que servirá de base para criar o elemento HTML
     */
    protected abstract template(modelo: Tipo): string;
}
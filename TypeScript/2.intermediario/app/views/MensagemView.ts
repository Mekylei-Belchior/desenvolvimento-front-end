export class MensagemView {

    private elemento: HTMLElement;

    /**
     * Construtor
     * 
     * @param cssID seletor CSS: id 
     */
    constructor(cssID: string) {
        this.elemento = document.querySelector(cssID);
    }

    /**
     * Renderiza a mensagem na página
     * 
     * @param mensagem que será exibida
     */
    atualiza(mensagem: string): void {
        this.elemento.innerHTML = this.template(mensagem);
    }

    /**
     * Cria um paragráfo
     * 
     * @param mensagem texto da mensagem
     * @returns um paragráfco em HTML
     */
    template(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}<p>`;
    }
}
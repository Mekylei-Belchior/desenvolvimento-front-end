export class MensagemView {
    /**
     * Construtor
     *
     * @param cssID seletor CSS: id
     */
    constructor(cssID) {
        this.elemento = document.querySelector(cssID);
    }
    /**
     * Renderiza a mensagem na página
     *
     * @param mensagem que será exibida
     */
    atualiza(mensagem) {
        this.elemento.innerHTML = this.template(mensagem);
    }
    /**
     * Cria um paragráfo
     *
     * @param mensagem texto da mensagem
     * @returns um paragráfco em HTML
     */
    template(mensagem) {
        return `<p class="alert alert-info">${mensagem}<p>`;
    }
}

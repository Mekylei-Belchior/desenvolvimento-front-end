import { View } from "./View.js";
export class MensagemView extends View {
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

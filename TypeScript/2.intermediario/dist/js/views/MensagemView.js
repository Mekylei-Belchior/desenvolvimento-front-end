import { View } from "./View.js";
export class MensagemView extends View {
    /**
     * Cria um paragráfo com a mensagem
     *
     * @param mensagem texto da mensagem
     * @returns um paragráfco em HTML
     */
    template(mensagem) {
        return `<p class="alert alert-info">${mensagem}<p>`;
    }
}

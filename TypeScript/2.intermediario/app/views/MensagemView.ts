import { View } from "./View.js";

export class MensagemView extends View<string> {

    /**
     * Cria um paragráfo com a mensagem
     * 
     * @param mensagem texto da mensagem
     * @returns um paragráfco em HTML
     */
    protected template(mensagem: string): string {
        return `<p class="alert alert-info">${mensagem}<p>`;
    }
}
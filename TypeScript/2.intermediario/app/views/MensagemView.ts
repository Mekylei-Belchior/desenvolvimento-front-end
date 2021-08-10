import { View } from "./View.js";

export class MensagemView extends View {

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
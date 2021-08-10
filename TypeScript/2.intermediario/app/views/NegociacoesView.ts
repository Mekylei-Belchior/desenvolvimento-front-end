import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View {

    /**
     * Redenriza a tabela do template
     */
    atualiza(modelo: Negociacoes): void {
        this.elemento.innerHTML = this.template(modelo);
    }

    /**
     * Cria uma tabela
     * @returns uma tabela em HTML
     */
    template(modelo: Negociacoes): string {
        return `

            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                
                <tbody>

                    ${modelo.lista().map(negocicao => {
                        return`
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negocicao.data)}</td>
                            <td>${negocicao.quantidade}</td>
                            <td>${negocicao.valor}</td>
                        </tr>
                        `
                    }).join('')}

                </tbody>
            </table>
        
        `;
    }
}
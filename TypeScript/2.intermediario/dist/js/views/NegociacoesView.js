import { View } from "./View.js";
export class NegociacoesView extends View {
    /**
     * Redenriza a tabela do template
     */
    atualiza(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
    /**
     * Cria uma tabela
     * @returns uma tabela em HTML
     */
    template(modelo) {
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
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negocicao.data)}</td>
                            <td>${negocicao.quantidade}</td>
                            <td>${negocicao.valor}</td>
                        </tr>
                        `;
        }).join('')}

                </tbody>
            </table>
        
        `;
    }
}

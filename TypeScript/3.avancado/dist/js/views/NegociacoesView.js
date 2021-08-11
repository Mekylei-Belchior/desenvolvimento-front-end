import { View } from "./View.js";
export class NegociacoesView extends View {
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
                            <td>${this.dataFormatada(negocicao.data)}</td>
                            <td>${negocicao.quantidade}</td>
                            <td>${negocicao.valor}</td>
                        </tr>
                        `;
        }).join('')}

                </tbody>
            </table>
        
        `;
    }
    dataFormatada(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}

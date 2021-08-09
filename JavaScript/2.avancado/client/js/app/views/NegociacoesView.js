class NegociacoesView extends View {

    /**
     * Adiciona linha na tabela
     * 
     * @param {*} modelo instância de ListaNegociacoes
     * @returns o elemento HTML com os dados a serem inseridos na tabela
     */
    template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="negociacaoController.ordena('data')">DATA</th>
                    <th onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="negociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="negociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.negociacoes.map(negociacao => 
                    `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                    ).join('')}
            </tbody>

            <tfoot>
                <td colspan='3'><strong>Volume Total</strong></td>
                <td><strong>${modelo.volumeTotal}</strong></td>
            </tfoot>
        </table>
        `
    }
}
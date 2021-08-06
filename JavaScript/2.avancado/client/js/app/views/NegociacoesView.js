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
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.nogociacoes.map(negociacao => 
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
                <td>${modelo.nogociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
            </tfoot>
        </table>
        `
    }
}
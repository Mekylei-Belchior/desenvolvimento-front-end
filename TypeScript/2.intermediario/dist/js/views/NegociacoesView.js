export class NegociacoesView {
    /**
     * Cria uma tabela
     * @returns uma tabela em HTML
     */
    template() {
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
                
                </tbody>
            </table>
        
        `;
    }
}

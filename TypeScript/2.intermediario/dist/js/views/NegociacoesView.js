export class NegociacoesView {
    /**
     * Construtor
     *
     * @param cssID seletor CSS: id
     */
    constructor(cssID) {
        this.elemento = document.querySelector(cssID);
    }
    /**
     * Redenriza a tabela do template
     */
    atualiza() {
        this.elemento.innerHTML = this.template();
    }
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

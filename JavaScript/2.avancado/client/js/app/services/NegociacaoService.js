class NegociacaoService {

    /**
     * Obtém as negogiações da semana
     * 
     * @param {*} callback função que será executada quando o (readyState) mudar
     */
    static obterNegociacoesDaSemana(callback) {

        // Define um objeto para realizar requisições AJAX
        let xhr = new XMLHttpRequest()

        // Inicializa uma requisição para o endereço local via GET
        xhr.open('GET', 'negociacoes/semana')

        // Guarda a função que será executada assim que for alterado o estado da requisição
        xhr.onreadystatechange = () => {
            // readyState 4: requisição está concluída e a resposta está pronta
            if (xhr.readyState == 4) {
                // Se o status for (200 - OK), executa o bloco
                if (xhr.status == 200) {
                    // Passa o retorno do response como segundo parâmento convetido em um array de (Negociações)
                    callback(null, JSON
                        .parse(xhr.responseText)
                        .map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor))
                    )
                    // Em caso de erro, imprime o erro no console e passa uma mensagem de erro como parâmetro 
                } else {
                    console.log(xhr.responseText)
                    callback('Não foi possível obter as negociações do servidor.', null)
                }
            }
        }

        // Executa a requisição
        xhr.send()
    }
}
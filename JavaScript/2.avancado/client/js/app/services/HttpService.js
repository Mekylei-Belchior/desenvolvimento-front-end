class HttpService {

    /**
     * Obtém as negociações fornecidas por uma API
     * 
     * @param {*} url endereço da API que fornece as negociações
     * @returns uma (Promise)
     */
    get(url) {

        return new Promise((resolve, reject) => {

            // Define um objeto para realizar requisições AJAX
            let xhr = new XMLHttpRequest()

            // Inicializa uma requisição para a url da API via GET
            xhr.open('GET', url)

            // Guarda a função que será executada assim que for alterado o estado da requisição
            xhr.onreadystatechange = () => {
                // readyState 4: requisição está concluída e a resposta está pronta
                if (xhr.readyState == 4) {
                    // Se o status for (200 - OK), executa o bloco
                    if (xhr.status == 200) {
                        // Passa o retorno do response em caso de sucesso
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        // Passa a mensagem de erro em caso de falha
                        reject(xhr.responseText)
                    }
                }
            }

            // Executa a requisição
            xhr.send()
        })
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest()

            xhr.open('POST', url, true)
            // Adiciona ao cabeçalho da requisição o tipo de conteúdo que será enviado
            xhr.setRequestHeader("Content-type", "application/json")

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        reject(JSON.parse(xhr.responseText))
                    }
                }
            }
            // Envia a requisição após converter os dados em uma string no formato JSON
            xhr.send(JSON.stringify(dado))
        })
    }
}
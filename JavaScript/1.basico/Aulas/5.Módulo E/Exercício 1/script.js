function iniciar() {

    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var resultado = document.getElementById('resultado')

    if (!inicio || !fim || !passo) {
        window.alert('Todos os campos devem ser preenchidos.')
    } else {
        // Converte para Number
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)

        if (passo < 1 || passo > 100) {
            window.alert('O campo [Passo] não é válido!')
        }else if (inicio < 0 || inicio > 100){
            window.alert('O campo [Início] não é válido!')
        } else if (fim < 0 || fim > 100){
            window.alert('O campo [Fim] não é válido!')
        }else {
            // Inicializa o resultado como vazio
            resultado.innerHTML = ''

            if (inicio < fim) {
                incrementa(inicio, fim, passo, resultado)
            }else{
                decrementa(inicio, fim, passo, resultado)
            }

            // Adiciona a bandeira
            resultado.innerHTML += ' &#127937;'
        }
    }
}

function incrementa(inicio, fim, passo, resultado){
    for (var contador = inicio; contador <= fim; contador += passo) {
        resultado.innerHTML += `<strong>${contador}</strong>`

        if (contador <= fim) {
            // Adiciona a mão
            resultado.innerHTML += ' &#128073; '
        }
    }
}

function decrementa(inicio, fim, passo, resultado){
    for (var contador = inicio; contador >= fim; contador -= passo) {
        resultado.innerHTML += `<strong>${contador}</strong>`

        if (contador >= fim) {
            // Adiciona a mão
            resultado.innerHTML += ' &#128073; '
        }
    }
}
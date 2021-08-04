var campos = [
    document.getElementById('data'),
    document.getElementById('quantidade'),
    document.getElementById('valor')
]

// Obtém o corpo da tabela
var tBody = document.querySelector('table tbody')

/*
    Adiciona um evento para o elemento 'submit' e chama uma função ao clicar no botão
*/
document.querySelector('.form').addEventListener('submit', function(event) {

    // Não submete o formulário (recarregue a página) e evita que os dados da tabela sejam perdidos
    event.preventDefault()

    // Cria um elemento para inserir uma nova linha na tabela
    var tr = document.createElement('tr')

    // Itera nos elementos dos campos e inseri os dados na nova linha da tabela
    campos.forEach(function(campo) {
        var td = document.createElement('td')
        td.textContent = campo.value
        tr.appendChild(td)
    })

    // Cria um campo na linha para inserir os dados de volume
    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume)

    // Adiciona a nova linha na tabela
    tBody.appendChild(tr)

    // Reinicializa os campos
    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0
    campos[0].focus()
})
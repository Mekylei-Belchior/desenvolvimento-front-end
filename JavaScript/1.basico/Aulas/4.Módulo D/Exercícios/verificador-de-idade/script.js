function verificar() {
    var anoNasc = document.getElementById('itAno').value
    var anoAtual = new Date().getFullYear()

    if (anoNasc.length == 0 || parseInt(anoNasc) > anoAtual) {
        window.alert(`O ano de nascimento dever ser menor ou igual a: ${anoAtual}`)
    } else {
        var resultado = document.getElementById('resultado')

        var sexo = document.getElementsByName('radioSexo')
        var idade = anoAtual - parseInt(anoNasc)
        var genero = ''

        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', './imagens/homem-crianca.png')
            } else if (idade < 18) {
                // adolescente
                imagem.setAttribute('src', './imagens/homem-adolescente.png')
            } else if (idade < 60) {
                // adulto
                imagem.setAttribute('src', './imagens/homem-adulto.png')
            } else {
                // idoso
                imagem.setAttribute('src', './imagens/homem-idoso.png')
            }

        } else {
            genero = 'mulher'

            if (idade >= 0 && idade < 10) {
                // criança
                imagem.setAttribute('src', './imagens/mulher-crianca.png')
            } else if (idade < 18) {
                // adolescente
                imagem.setAttribute('src', './imagens/mulher-adolescente.png')
            } else if (idade < 60) {
                // adulto
                imagem.setAttribute('src', './imagens/mulher-adulta.png')
            } else {
                // idoso
                imagem.setAttribute('src', './imagens/mulher-idosa.png')
            }

        }

        resultado.innerHTML = `<p>Foi detectado ${genero} de <strong>${idade}</strong> ano(s).</p>`
        resultado.style.marginTop = '3px'
        resultado.appendChild(imagem)
    }
}

function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var hora = new Date().getHours()
    var caminho = './imagens/'
    
    mensagem.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora < 12){
        document.body.style.backgroundColor = '#C7B585'
        imagem.src = `${caminho}manha.png`
    } else if (hora < 18){
        document.body.style.backgroundColor = '#FE7602'
        imagem.src = `${caminho}tarde.png`
    } else{
        document.body.style.backgroundColor = '#020C18'
        imagem.src = `${caminho}noite.png`
    }

}
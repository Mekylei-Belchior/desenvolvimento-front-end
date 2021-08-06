class MensagemView extends View{

    /**
     * Adiciona uma mensagem na página web
     * 
     * @param {*} modelo instância de Mensagem
     * @returns o elemento HTML com a mensagem
     */
    template(modelo){
        return modelo.texto ? `<p class='alert alert-info'>${modelo.texto}</p>` : `<p></p>`
    }
}
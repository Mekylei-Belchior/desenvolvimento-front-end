class Codigo {

    constructor(codigo){        
        if (!this._valida(codigo)) throw new Error(`O código ${codigo} não é válido!`)
        
        this._codigo = codigo
    }

    /**
     * Valida se um código atende a uma expressão regular
     * 
     * @param {*} codigo que será validado
     */
    _valida(codigo) {
        // expressao que irá validar o código 
        let expressao = /^\D{3}-\D{2}-\d{2}$/

        return expressao.test(codigo)
    }

    /**
     * Devolve o código
     */
    get codigo(){
        return this._codigo
    }
}


let codigo = 'GWZ-JJ-12'

/*
* \D: qualquer coisa não dígito
* \d: qualquer dígito
* {}: quantidade de elementos
* ^ : começa com
* $ : termina com
*/

// let expressao = /^\D{3}-\D{2}-\d{2}$/
let codigo1 = new Codigo(codigo)

console.log(codigo1.codigo)
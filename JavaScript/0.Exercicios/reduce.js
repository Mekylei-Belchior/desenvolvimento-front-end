let lista = [1, 2, 3, 4, 5]

/**
 * Imprime no console o somatório de todos os elementos de um array
 * 
 * @param {*} array lista de números que serão somados
 */
function somatorio(numeros){
    console.log(`Somatório: ${numeros.reduce((total, numero) => total + numero, 0.0)}`)
}


/**
 * Imprime no console o produto de todos os elementos de um array
 * 
 * @param {*} array lista de números que serão multiplicados
 */
function produtorio(numeros){
    console.log(`Produtório: ${numeros.reduce((anterior, atual) => anterior * atual, 1)}`)
}

somatorio(lista)
produtorio(lista)
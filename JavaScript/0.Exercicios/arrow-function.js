let umaData = '2021-08-05'
let numeros = [3, 2, 11, 20, 8, 7]

/*
 * Atribui uma data a partir de uma String
 */
let data = new Date(
    ...umaData // utiliza o Spread Separator ( ... ) para desmembrar o array que será gerado a partir da String
        .split('-') // cria um array com os elementos ao desmembrar a String pelo delimitador ' - '
        .map(
            // aplica uma função para cada elemento do array
            // se o índice do valor for ímpar, irá subtrair (-1)
            (valor, indice) => valor - indice % 2) // => arrow function
)

/**
 * Dobra os números ímpares de um array
 * 
 * @param numeros array de números | exemplo = [3, 2, 11, 20, 8, 7]
 */
function dobraImpar(numeros) {
    let resultado = numeros
        .map(numero => (numero % 2 + 1) * numero)
    //.map(numero => numero % 2 ? numero * 2 : numero)

    console.log(resultado)
}

console.log(`Data: -> ${data}`)
dobraImpar(numeros)
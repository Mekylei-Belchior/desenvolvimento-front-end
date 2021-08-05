let dataString = '05-08-2021'

/**
 * Cria uma data a partir de uma String
 * 
 * @param dataString uma data no formato String | Exemplo : '05-08-2021'
 */
function data(dataString) {
    return new Date(dataString
        .split('-') // separa os campos pelo ' - '
        .reverse() // inverte a ordem dos campos
        .join('/') // gera uma nova string juntando os campos com ' / '
    )
}

console.log(data(dataString))
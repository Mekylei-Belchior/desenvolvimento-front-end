let dataString = '05-08-2021'

/**
 * Cria uma data a partir de uma String
 * 
 * .split('-') = separa os campos pelo ' - '
 * .reverse()  = inverte a ordem dos campos
 * .join('/')  = gera uma nova string juntando os campos com ' / '
 */
function data(dataString) {
    return new Date(dataString
        .split('-')
        .reverse()
        .join('/')
    )
}

console.log(data(dataString))
let lista1 = [1, 2, 3, 4, 5]
let lista2 = [6, 7, 8, 9, 10]
let lista3 = [11, 12, 13, 14, 15]

/**
 * Agrupa listas
 * 
 * @param  {...any} listas lista que serão agrupadas
 * @returns uma lista agrupada
 */
function agrupar(...listas){
    return [].concat(...listas)
}

console.log(agrupar(lista1, lista2, lista3))

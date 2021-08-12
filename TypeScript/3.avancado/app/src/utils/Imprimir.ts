import { Imprimivel } from "./Imprimivel.js";

/**
 * Imprime no console os objetos.
 * 
 * @param objetos array de objetos imprimíveis.
 */
export function imprimir(...objetos: Imprimivel[]): void {
    objetos.forEach(objeto => console.log(objeto.paraTexto()));
}

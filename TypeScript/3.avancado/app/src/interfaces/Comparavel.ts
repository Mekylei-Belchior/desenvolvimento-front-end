export interface Comparavel<Tipo> {

    /**
     * Compara se um objeto é igual ao outro.
     * 
     * @param objeto que será utilizado na comparação. 
     */
    ehIgual(objeto: Tipo): boolean;

}
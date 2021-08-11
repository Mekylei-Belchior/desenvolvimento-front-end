/**
 * Injeta um elemento do DOM em uma propriedade.
 * 
 * @param seletor um seletor CSS: id, class.
 * 
 * @returns o elemento a ser injetado.
 */
export function domInjector(seletor: string) {
    /** 
     * Decorator que injeta um elemento do DOM em uma propriedade.
     * 
     * @param target - Em propriedades estáticas, é a função construtora da classe. Para propriedades não estáticas, é o Prototype da classe em que está sendo aplicado o decorator.
     * @param propertyKey - Nome do propriedade em que o decorator é aplicado.
     * 
     * @returns 
     */
    return function (target: any, propertyKey: string) {
        /** Faz o cache do elemento em função do escopo da função */
        let elemento: HTMLElement;

        /** Define o get para ser adicionado na definição da propriedade */
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
            }

            return elemento;
        }

        /** Adiciona um getter a definição da propriedade */
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}
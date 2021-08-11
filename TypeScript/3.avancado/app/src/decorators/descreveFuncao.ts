/**
 * Decorator para descrever uma função
 * 
 * @returns a descição da função contendo: nome da função, seus parâmetros e o seu retorno. 
 */
export function descreveFuncao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const retorno = metodoOriginal.apply(this, args);

            console.log(
                `
                Método: ${propertyKey}
                Parâmetros: ${JSON.stringify(args)} 
                Retorno: ${JSON.stringify(retorno)}
                `
            );

            return retorno;
        }

        return descriptor;
    }
}
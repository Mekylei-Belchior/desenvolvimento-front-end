/**
 * Decorator para descrever uma função.
 * 
 * @param target - Em métodos estáticos, é a função construtora da classe. Para métodos não estáticos, é o Prototype da classe em que está sendo aplicado o decorator.
 * @param propertyKey - Nome do método em que o decorator é aplicado.
 * @param descriptor - Conjunto de propriedades que definem uma propriedade de um objeto, possui referência para o método original em que está sendo aplicado o decorator, tais como: configurable, enumerable, value e writable, além de get e set.
 * 
 * @returns a descição da função contendo: nome da função, seus parâmetros e o seu retorno.
 */
export function descreveFuncao(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
/**
 * Decorator para realizar o escape de tag script.
 * 
 * @param target - Em métodos estáticos, é a função construtora da classe. Para métodos não estáticos, é o Prototype da classe em que está sendo aplicado o decorator.
 * @param propertyKey - Nome do método em que o decorator é aplicado.
 * @param descriptor - Conjunto de propriedades que definem uma propriedade de um objeto, possui referência para o método original em que está sendo aplicado o decorator, tais como: configurable, enumerable, value e writable, além de get e set.
 * 
 * @returns elemento sem a tag script.
 */
export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);

        if (retorno == 'string') {
            /** Se true, remove tag (script), se existir. */
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        console.log(`Decorator "@escapar" executado no método [${propertyKey}] da classe [${this.constructor.name}].`);

        return retorno;
    }

    return descriptor;
}
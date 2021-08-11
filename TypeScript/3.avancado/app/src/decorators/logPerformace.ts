/**
 * Decorator para medir a performace de execução de um método
 * 
 * @returns o decorator
 */
export function logPerformace(emSegundos: boolean = true) {
    /**
     * @param target - Em métodos estáticos, é a função construtora da classe. Para métodos não estáticos, é o Prototype da classe em que está sendo aplicado o decorator.
     * @param propertyKey - Nome do método em que o decorator é aplicado.
     * @param descriptor - Conjunto de propriedades que definem uma propriedade de um objeto, possui referência para o método original em que está sendo aplicado o decorator, tais como: configurable, enumerable, value e writable, além de get e set.
     * 
     * @returns - O novo comportamento do método em que o decorator foi aplicado.
     */
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        /** Garda o comportamento original do método */
        const metodoOriginal = descriptor.value;

        /** Implementação do novo comportamento a ser executado */
        descriptor.value = function (...args: Array<any>) {
            /** Atribui valores para medição em segundos */
            let divisor = 1000;
            let unidade = 'segundos';

            /** Para quando o parâmetro (emSegundos) for false, calcula em milisegundos */
            if (!emSegundos) {
                divisor = 1;
                unidade = 'milisegundos';
            }

            /** Tempo inicial de execução do método */
            const inicial = performance.now();

            /** Guarda o retorno do método original aplicado ao contexto da classo que o chamou com o conjunto de argumentos */
            const retorno = metodoOriginal.apply(this, args);

            /** Tempo final de execução do método */
            const final = performance.now();

            /** Mostra no console o tempo de execução do método */
            console.log(`Método (${propertyKey}) executado. O tempo de execução foi: ${(final - inicial) / divisor} ${unidade}`);
            retorno
        };

        /** O novo comportamento do método */
        return descriptor;

    }
}
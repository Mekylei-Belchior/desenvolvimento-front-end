export function logPerformace(emSegundos = true) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1000;
            let unidade = 'segundos';
            if (!emSegundos) {
                divisor = 1;
                unidade = 'milisegundos';
            }
            const inicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const final = performance.now();
            console.log(`Método (${propertyKey}) executado. O tempo de execução foi: ${(final - inicial) / divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}

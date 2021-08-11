export function logPerformace() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const inicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const final = performance.now();
            console.log(`Método (${propertyKey}) executado. O tempo de execução foi: ${(final - inicial) / 1000} segundos`);
            retorno;
        };
        return descriptor;
    };
}

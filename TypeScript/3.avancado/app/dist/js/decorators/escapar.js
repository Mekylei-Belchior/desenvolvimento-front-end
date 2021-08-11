export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (retorno == 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        console.log(`Decorator "@escapar" executado no método [${propertyKey}] da classe [${this.constructor.name}].`);
        return retorno;
    };
    return descriptor;
}

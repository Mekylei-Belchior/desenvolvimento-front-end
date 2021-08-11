export function descreveFuncao(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`
            Método: ${propertyKey}
            Parâmetros: ${JSON.stringify(args)} 
            Retorno: ${JSON.stringify(retorno)}
            `);
        return retorno;
    };
    return descriptor;
}

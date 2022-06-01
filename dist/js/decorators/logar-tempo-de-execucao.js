export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        console.log(`descriptor`, descriptor);
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            console.log(`this`, this);
            const t1 = performance.now();
            const retornoMetodoOriginal = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao: ${(t2 - t1) / divisor} ${unidade}.`);
            return retornoMetodoOriginal;
        };
        return descriptor;
    };
}

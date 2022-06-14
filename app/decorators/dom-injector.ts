export function domInjector(seletor: string) {

     return function(target: any, propertyKey: string) {
        console.log(`modificando proptype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        
        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log('buscando elemento do DOM' + propertyKey);
            }
            
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
     }
}
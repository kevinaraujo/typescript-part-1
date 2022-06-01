import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected element: HTMLElement;
    private escapar = false;

    constructor(selector: string, escapar?: boolean) {
        const element = document.querySelector(selector);

        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM.`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    @logarTempoDeExecucao(true)
    @inspect
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.element.innerHTML = template;
    }
}
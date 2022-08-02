import { Imprimivel } from "../util/imprimivel.js";
import { Negociacao } from "./negociacao";

export class Negociacoes implements Imprimivel{
    private negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}

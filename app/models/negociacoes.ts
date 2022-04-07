import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listar(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

import { NegociacaoDTO } from "./negociacaoDTO";

export class Negociacao {
  constructor(
    public readonly _negociacaoDTO: NegociacaoDTO
  ) {}

  get volume(): number {
    return this._negociacaoDTO._quantidade * this._negociacaoDTO._valor;
  }
}

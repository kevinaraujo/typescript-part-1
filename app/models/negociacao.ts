import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../util/imprimivel.js";
import { NegociacaoDTO } from "./negociacaoDTO.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao> {
  constructor(
    public readonly _negociacaoDTO: NegociacaoDTO
  ) {}

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(new NegociacaoDTO(date, quantidade, valor));
  }

  get volume(): number {
    return this._negociacaoDTO._quantidade * this._negociacaoDTO._valor;
  }

  public paraTexto(): string {
    return `
      Data: ${this._negociacaoDTO.data},
      Quantidade: ${this._negociacaoDTO._quantidade},
      Valor: ${this._negociacaoDTO._valor}
    `
  }

  public ehIgual(negociacao: Negociacao):boolean {
    return this._negociacaoDTO.data.getDate() === negociacao._negociacaoDTO.data.getDate()
      && this._negociacaoDTO.data.getMonth() ===  negociacao._negociacaoDTO.data.getMonth()
      && this._negociacaoDTO.data.getFullYear() ===  negociacao._negociacaoDTO.data.getFullYear()
  }
}

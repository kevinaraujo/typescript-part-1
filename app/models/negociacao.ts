import { NegociacaoDTO } from "./negociacaoDTO.js";

export class Negociacao {
  constructor(
    public readonly _negociacaoDTO: NegociacaoDTO
  ) {}

  get volume(): number {
    return this._negociacaoDTO._quantidade * this._negociacaoDTO._valor;
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(new NegociacaoDTO(date, quantidade, valor));
  }
}

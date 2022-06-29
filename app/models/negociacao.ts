import { NegociacaoDTO } from "./negociacaoDTO.js";

export class Negociacao {
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
}

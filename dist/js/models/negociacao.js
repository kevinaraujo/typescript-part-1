import { NegociacaoDTO } from "./negociacaoDTO.js";
export class Negociacao {
    constructor(_negociacaoDTO) {
        this._negociacaoDTO = _negociacaoDTO;
    }
    get volume() {
        return this._negociacaoDTO._quantidade * this._negociacaoDTO._valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(new NegociacaoDTO(date, quantidade, valor));
    }
}

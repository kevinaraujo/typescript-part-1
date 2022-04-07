export class Negociacao {
    constructor(_negociacaoDTO) {
        this._negociacaoDTO = _negociacaoDTO;
    }
    get volume() {
        return this._negociacaoDTO._quantidade * this._negociacaoDTO._valor;
    }
}

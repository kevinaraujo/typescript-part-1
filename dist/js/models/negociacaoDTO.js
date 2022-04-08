export class NegociacaoDTO {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        console.log('chamou');
        const data = new Date(this._data.getTime());
        return data;
    }
}

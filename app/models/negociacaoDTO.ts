export class NegociacaoDTO {
    constructor (
        private readonly _data: Date, 
        public readonly _quantidade: number, 
        public readonly _valor: number
    ){}

  get data(): Date {
    const data = new Date(this._data.getTime())
    return data;
  }
}
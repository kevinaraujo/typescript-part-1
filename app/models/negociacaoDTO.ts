export class NegociacaoDTO {
    constructor (
        public readonly _data: Date, 
        public readonly_quantidade: number, 
        public readonly _valor: number
    ){}
}
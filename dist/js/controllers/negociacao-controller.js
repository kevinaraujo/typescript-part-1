import { Negociacao } from "../models/negociacao.js";
import { NegociacaoDTO } from "../models/negociacaoDTO.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adicionar() {
        const negociacao = this.criaNegociacao();
        negociacao._negociacaoDTO._quantidade = 10;
        this.negociacoes.adicionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(new NegociacaoDTO(date, quantidade, valor));
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

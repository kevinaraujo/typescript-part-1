import { Negociacao } from "../models/negociacao.js";
import { NegociacaoDTO } from "../models/negociacaoDTO.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adicionar(): void {
    const negociacao = this.criaNegociacao();
    const day = negociacao._negociacaoDTO.data.getDay();
    if (day > 0 && day < 6) {
      negociacao._negociacaoDTO.data.setDate(16)
      this.negociacoes.adicionar(negociacao);
      
      this.atualizaView();
      this.limparFormulario();    
    } else {
      this.mensagemView.update('Apenas dias úteis são aceitos.');
    }
  }

  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(new NegociacaoDTO(date, quantidade, valor));
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociacao adicionada com sucesso!');
  }
}

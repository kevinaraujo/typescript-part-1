import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = <HTMLInputElement> document.querySelector("#data");
    this.inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  public adicionar(): void {
    /* já viu isso zé? 
    
    */
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    )

    if (!this.ehDiaUtil(negociacao._negociacaoDTO.data)) {
      this.mensagemView.update('Apenas dias úteis são aceitos.');
      return;
    }

    negociacao._negociacaoDTO.data.setDate(16)
    this.negociacoes.adicionar(negociacao);
    
    this.atualizaView();
    this.limparFormulario();    
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

  private ehDiaUtil(data: Date) {
    const day = data.getDay();
    return day > DiasDaSemana.DOMINGO && day < DiasDaSemana.SABADO
  }
}

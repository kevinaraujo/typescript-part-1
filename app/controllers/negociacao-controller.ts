import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoDTO } from "../models/negociacaoDTO.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../util/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;

  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;

  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');
  private negociacoesService = new NegociacoesService();

  constructor() {
    // this.inputData = <HTMLInputElement> document.querySelector("#data");
    // this.inputQuantidade = <HTMLInputElement> document.querySelector("#quantidade");
    // this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
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

   
    this.negociacoes.adicionar(negociacao);
    imprimir(negociacao, this.negociacoes);
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

  public importaDados(): void {
    this.negociacoesService
      .obterNegociacoesDoDia()
      .then(negociacoesDeHoje => {
        console.log('negociacoesDeHoje', this.negociacoes.listar())
        return negociacoesDeHoje.filter(negociacaoDeHoje => {
          return !this.negociacoes.listar()
            .some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
        })
      })
      .then(negociacoesDeHoje => {
        for(let negociacao of negociacoesDeHoje) {
          this.negociacoes.adicionar(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      })
  }

  private ehDiaUtil(data: Date) {
    const day = data.getDay();
    return day > DiasDaSemana.DOMINGO && day < DiasDaSemana.SABADO
  }
}

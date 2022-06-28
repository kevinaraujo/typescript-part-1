import { negociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";
import { NegociacaoDTO } from "../models/negociacaoDTO";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8081/dados')
            .then((res) => res.json())
            .then((data: negociacoesDoDia[]) => {
                return data.map(dado => {
                    return new Negociacao(
                        new NegociacaoDTO(
                            new Date(),
                            dado.vezes,
                            dado.montante
                        )
                    );
                });
            });
    }
}
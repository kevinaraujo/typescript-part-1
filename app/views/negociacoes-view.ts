import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listar().map(item => {
                        return `
                            <tr>
                                <td>${this.formatar(item._negociacaoDTO.data)}</td>
                                <td>${item._negociacaoDTO._quantidade}</td>
                                <td>${item._negociacaoDTO._valor}</td>
                            </tr>
                            `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date) {
        return new Intl.DateTimeFormat()
            .format(data); 
    }
}
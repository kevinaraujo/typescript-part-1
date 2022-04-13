export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                                <td>${new Intl.DateTimeFormat().format(item._negociacaoDTO.data)}</td>
                                <td>${item._negociacaoDTO._quantidade}</td>
                                <td>${item._negociacaoDTO._valor}</td>
                            </tr>
                            `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}

export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    paraTexto() {
        return `
            Data: ${this._data},
            Qauntidade: ${this._quantidade},
            Valor: ${this._valor}
            `;
    }
    ehIgual(negociacao) {
        return this._data === negociacao._data &&
            this._quantidade === negociacao._quantidade &&
            this._valor === negociacao._valor;
    }
    static cria(dataString, quantidadeString, valorString) {
        const data = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}

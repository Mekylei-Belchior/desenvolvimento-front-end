var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantidade, _valor;
export class Negociacao {
    /**
     * Construtor que inicializa as propriedades quando a classe é instânciada
     * @param {*} data da negociação
     * @param {*} quantidade negociada
     * @param {*} valor custo por unidade
     */
    constructor(data, quantidade, valor) {
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    /**
     * Devolve a data da negociação
     */
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    /**
     * Devolve a quantidade negociada
     */
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade);
    }
    /**
     * Devolve o custo por unidade
     */
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    /**
     * Devolve o volume negociado
     */
    get volume() {
        return __classPrivateFieldGet(this, _quantidade) * __classPrivateFieldGet(this, _valor);
    }
}
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();

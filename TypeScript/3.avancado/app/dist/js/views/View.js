var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { descreveFuncao } from "../decorators/descreveFuncao.js";
import { logPerformace } from "../decorators/logPerformace.js";
export class View {
    constructor(cssID) {
        let elemento = document.querySelector(cssID);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O elemento do seletor ${cssID} não foi encontrado no DOM.`);
        }
    }
    atualiza(modelo) {
        this.elemento.innerHTML = this.template(modelo);
    }
}
__decorate([
    logPerformace(false),
    descreveFuncao
], View.prototype, "atualiza", null);
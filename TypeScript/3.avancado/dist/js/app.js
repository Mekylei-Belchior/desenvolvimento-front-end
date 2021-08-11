import { NegociacaoController } from "./controllers/NegociacaoController.js";
const formularioSeletor = '.form';
const negocicaoController = new NegociacaoController();
const formulario = document.querySelector(formularioSeletor);
if (formulario) {
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        negocicaoController.adiciona();
    });
}
else {
    throw new Error(`O elemento do seletor "${formularioSeletor}" não foi encontrado no DOM.`);
}

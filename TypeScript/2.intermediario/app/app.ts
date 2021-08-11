import { NegociacaoController } from "./controllers/NegociacaoController.js";

const negocicaoController = new NegociacaoController();
const formulario = document.querySelector('.form');

if (formulario) {
    formulario.addEventListener('submit', event => {
        // Evita que o formulário seja submetido
        event.preventDefault();

        negocicaoController.adiciona();

    })
} else {
    throw new Error(`O elemento ${formulario} não foi encontrado no DOM.`)
}

import { NegociacaoController } from "./controllers/NegociacaoController.js";

const formularioSeletor = '.form';
const botaoSelector = '#btn-importar';

const formulario = document.querySelector(formularioSeletor);
const importar = document.querySelector(botaoSelector);

const negocicaoController = new NegociacaoController();


if (formulario) {
    formulario.addEventListener('submit', event => {
        // Evita que o formulário seja submetido
        event.preventDefault();

        negocicaoController.adiciona();

    })
} else {
    throw new Error(`O elemento do seletor "${formularioSeletor}" não foi encontrado no DOM.`)
}

if (importar) {
    importar.addEventListener('click', () => {
        negocicaoController.importa();
    })
} else {
    throw new Error(`O elemento do seletor "${botaoSelector}" não foi encontrado no DOM.`);
}

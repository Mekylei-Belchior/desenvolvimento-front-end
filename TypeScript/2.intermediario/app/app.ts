import { NegociacaoController } from "./controllers/NegociacaoController.js";

const negocicaoController = new NegociacaoController();
const formulario = document.querySelector('.form');

formulario.addEventListener('submit', event => {
    // Evita que o formulário seja submetido
    event.preventDefault();

    negocicaoController.adiciona();
})
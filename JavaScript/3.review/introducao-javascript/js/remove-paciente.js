const tbPacientes = buscaPeloSeletor("table");

tbPacientes.addEventListener("dblclick", (event) => {
  if (event.target.tagName == "TD") {
    event.target.parentNode.classList.add("transicao-remove-paciente");

    setTimeout(() => {
      event.target.parentNode.remove();
    }, 300);
  }
});

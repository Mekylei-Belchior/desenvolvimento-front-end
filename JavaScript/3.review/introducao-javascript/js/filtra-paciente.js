const filtro = buscaPeloSeletor("#filtra-paciente");

filtro.addEventListener("input", (event) => {
  const pacientes = window.document.querySelectorAll(".paciente");

  if (event.target.value.length > 0) {
    pacientes.forEach((paciente) => {
      const nome = paciente.querySelector(".info-nome").textContent;
      const expressao = new RegExp(event.target.value, "i");

      if (!expressao.test(nome)) {
        paciente.classList.add("ocultar");
      } else {
        paciente.classList.remove("ocultar");
      }
    });
  } else {
    pacientes.forEach((paciente) => {
      paciente.classList.remove("ocultar");
    });
  }
});

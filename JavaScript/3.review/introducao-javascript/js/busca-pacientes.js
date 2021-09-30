const API = "https://api-pacientes.herokuapp.com/pacientes";
const botaoBuscar = buscaPeloSeletor("#busca-paciente");

botaoBuscar.addEventListener("click", () => {
  xhr = new XMLHttpRequest();
  xhr.open("GET", API);

  xhr.addEventListener("load", () => {
    const badRequest = buscaPeloSeletor("#bad-request");

    if (xhr.status == 200) {
      const pacientes = JSON.parse(xhr.responseText);
      pacientes.forEach((paciente) => {
        badRequest.classList.add("ocultar");
        adicionaPaciente(paciente);
      });
    } else {
      console.table({ status: xhr.status, mensagem: xhr.responseText });
      badRequest.classList.remove("ocultar");
    }
  });

  xhr.send();
});

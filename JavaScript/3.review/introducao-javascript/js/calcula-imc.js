const titulo = window.document.querySelector(".titulo-principal");
titulo.textContent = "Nutricionista";

const pacientes = window.document.querySelectorAll(".paciente");

function calculaIMC(peso, altura) {
  const resultado = peso / (altura * altura);

  return resultado.toFixed(2);
}

for (let paciente of pacientes) {
  const peso = paciente.querySelector(".info-peso").textContent;
  const altura = paciente.querySelector(".info-altura").textContent;
  const IMC = paciente.querySelector(".info-imc");

  const pesoEhValido = verificaPeso(peso);
  const alturaEhValida = verificaAltura(altura);

  if (!pesoEhValido) {
    IMC.textContent = "Peso inválido!";
    paciente.classList.add("campo-invalido");
  }

  if (!alturaEhValida) {
    IMC.textContent = "Altura inválida!";
    paciente.classList.add("campo-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    IMC.textContent = calculaIMC(peso, altura);
  }
}

function verificaPeso(peso) {
  if (peso <= 0 || peso >= 600.0) {
    return false;
  }
  return true;
}

function verificaAltura(altura) {
  if (altura <= 0 || altura >= 3.0) {
    return false;
  }
  return true;
}

const formulario = buscaPeloSeletor("#form-adiciona");
const botao = buscaPeloSeletor("#adicionar-paciente");

function obtemDadosDoPaciente(formulario) {
  const paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calculaIMC(formulario.peso.value, formulario.altura.value),
  };

  return paciente;
}

function adicionaPaciente(paciente) {
  const tr = criaElemento("tr");
  tr.classList = "paciente";

  const nomeTd = criaElemento("td");
  nomeTd.classList.add("info-nome");
  const pesoTd = criaElemento("td");
  pesoTd.classList.add("info-peso");
  const alturaTd = criaElemento("td");
  alturaTd.classList.add("info-altura");
  const gorduraTd = criaElemento("td");
  gorduraTd.classList.add("info-gordura");
  const imcTd = criaElemento("td");
  imcTd.classList.add("info-imc");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  tr.appendChild(nomeTd);
  tr.appendChild(pesoTd);
  tr.appendChild(alturaTd);
  tr.appendChild(gorduraTd);
  tr.appendChild(imcTd);

  novoPaciente(tr);
}

function novoPaciente(tr) {
  const tabela = buscaPeloSeletor("#tabela-pacientes");
  tabela.appendChild(tr);
}

function buscaPeloSeletor(seletor) {
  return window.document.querySelector(seletor);
}

function criaElemento(elemento) {
  return window.document.createElement(elemento);
}

function validaPaciente(paciente) {
  const erros = [];

  if (!verificaPeso(paciente.peso) && paciente.peso.length > 0) {
    erros.push("Peso inválido!");
  }

  if (!verificaAltura(paciente.altura) && paciente.altura.length > 0) {
    erros.push("Altura inválida!");
  }

  if (paciente.nome.length == 0) {
    erros.push("Informe um nome.");
  }

  if (paciente.peso.length == 0) {
    erros.push("Informe o peso.");
  }

  if (paciente.altura.length == 0) {
    erros.push("Informe a altura.");
  }

  if (paciente.gordura.length == 0) {
    erros.push("Informe o percentual de gordura.");
  }

  return erros;
}

function exibeErros(erros) {
  const ul = buscaPeloSeletor("#mensagens-erro");

  erros.forEach((erro) => {
    const li = criaElemento("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

botao.addEventListener("click", (event) => {
  event.preventDefault();

  const ul = buscaPeloSeletor("#mensagens-erro");
  const paciente = obtemDadosDoPaciente(formulario);
  erros = validaPaciente(paciente);

  if (erros.length == 0) {
    adicionaPaciente(paciente);
    ul.innerHTML = "";
    formulario.reset();
  } else {
    ul.innerHTML = "";
    exibeErros(erros);
  }
});

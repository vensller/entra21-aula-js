let listaDeTarefas = [];

function verificarIdade() {
  console.log("Botao clicado");
  const inputIdade = document.getElementById("input_idade");
  const spanIdade = document.getElementById("texto_idade");
  const idade = inputIdade.value;
  console.log(idade);
  if (idade) {
    console.log("Usuário digitou " + idade);
    spanIdade.innerText = idade >= 18 ? "Maior de idade" : "Menor de idade";
  } else {
    console.log("Não digitou nada");
    spanIdade.innerText = "";
    alert("Você precisa digitar a idade");
  }
}

function criarTarefaNaTela(textoTarefa) {
  const itemLista = document.createElement("li");
  itemLista.innerText = textoTarefa;
  const listaTarefas = document.getElementById("lista_tarefas");
  listaTarefas.appendChild(itemLista);
}

function adicionarTarefa() {
  console.log("Clicou para adicionar tarefa");
  const inputTarefa = document.getElementById("input_tarefa");
  const novaTarefa = inputTarefa.value;
  if (novaTarefa) {
    criarTarefaNaTela(novaTarefa);
    listaDeTarefas.push(novaTarefa);
    localStorage.setItem("lista_tarefas", JSON.stringify(listaDeTarefas));
  } else {
    alert("Você precisa digitar a nova tarefa");
  }
}

function carregarTarefas() {
  const storage = JSON.parse(localStorage.getItem("lista_tarefas"));
  listaDeTarefas = storage ? storage : [];
  for (let tarefa of listaDeTarefas) {
    criarTarefaNaTela(tarefa);
  }
}

function adicionarPessoa() {
  // Buscando o input de Nome e Idade da tela
  const inputNome = document.getElementById("input_nome");
  const inputIdade = document.getElementById("input_idade2");

  // Criando um novo objeto usando os valores do
  // input de nome e do input de idade
  const novaPessoa = {
    nome: inputNome.value,
    idade: inputIdade.value,
  };

  console.log(novaPessoa);

  // Criando os elementos da nova linha
  // TR - Nova Linha
  // TD - Coluna da Linha
  const novaLinha = document.createElement("tr");
  const colunaNome = document.createElement("td");
  const colunaIdade = document.createElement("td");

  // Informando os valores das novas colunas
  colunaNome.innerText = novaPessoa.nome;
  colunaIdade.innerText = novaPessoa.idade;

  // Adicionando as colunas na linha
  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaIdade);

  // Adicionando a nova linha na tabela
  const tabelaPessoas = document.getElementById("tabela_pessoas");
  tabelaPessoas.appendChild(novaLinha);
}

function configurarEventos() {
  console.log("Página carregada");
  carregarTarefas();
  const botaoIdade = document.getElementById("botao_idade");
  botaoIdade.addEventListener("click", verificarIdade);

  const botaoTarefa = document.getElementById("botao_tarefa");
  botaoTarefa.addEventListener("click", adicionarTarefa);

  const botaoPessoa = document.getElementById("botao_pessoa");
  botaoPessoa.addEventListener("click", adicionarPessoa);
}

window.addEventListener("load", configurarEventos);

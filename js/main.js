(() => {
  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");
  const containerTasks = document.querySelector(".tasks-container-itens");
  let numeroTarefas = containerTasks.getElementsByTagName("section");

  const completasbtn = document.querySelector(".completas");
  const todasbtn = document.querySelector(".todas");

  let tasks = [];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    adicionarTarefas(input.value);

    render(tasks);
    tarefasCount();

    input.value = "";
    input.focus();
  });

  function adicionarTarefas(tituloTarefa) {
    tasks.push({ titulo: `${tituloTarefa}`, completa: false });
  }

  function criarTask(titulo) {
    const taskItem = document.createElement("section");
    taskItem.classList.add("task-item");

    const taskTitleCompleted = document.createElement("div");
    taskTitleCompleted.classList.add("tasksTitle-completed");

    taskTitleCompleted.appendChild(checkbox(tasks.completa));

    const tituloTask = document.createElement("p");
    tituloTask.textContent = `${titulo}`;
    taskTitleCompleted.appendChild(tituloTask);

    taskItem.appendChild(taskTitleCompleted);

    deleteTask(taskItem);

    return taskItem;
  }

  function checkbox() {
    const checkBox = document.createElement("button");
    checkBox.classList.add("taskCompleted");

    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].completa == true) {
        console.log(tasks[index])
        checkBox.classList.add("checked");
      }
    }

    checkBox.addEventListener("click", (e) => {
      const elemento = e.target.parentElement;
      const elementopai = elemento.parentElement;
      const indexObj = indexTarefa(elementopai);

      const estado = tasks[indexObj].completa;

      tasks[indexObj].completa = !estado;

      const paragrafo = elementopai.querySelector("p");
      paragrafo.classList.toggle("completa");
      checkBox.classList.toggle("checked");
    });

    return checkBox;

  }

  function deleteTask(tarefa) {
    const deletar = document.createElement("img");
    deletar.setAttribute("src", "./images/icon-cross.svg");
    deletar.classList.add("deletarTarefa");

    deletar.addEventListener("click", (e) => {
      const Elemento = e.target.parentElement;
      const indexObj = indexTarefa(Elemento);

      tasks.splice(indexObj, 1);

      render(tasks);
      tarefasCount();
    });

    tarefa.appendChild(deletar);
  }

  function indexTarefa(tarefa) {
    const indexElemento = [...numeroTarefas].indexOf(tarefa);
    return indexElemento;
  }

  function render(array) {

    containerTasks.innerHTML = "";

    array.forEach((task) => {
      containerTasks.appendChild(criarTask(task.titulo));
    });
  }

  function tarefasCount() {
    const tasksNumbers = document.querySelector(".btn-filtro");
    const tamanhoListaTarefas = numeroTarefas.length;
    tamanhoListaTarefas < 2
      ? (tasksNumbers.textContent = `${tamanhoListaTarefas} tarefa restante`)
      : (tasksNumbers.textContent = `${tamanhoListaTarefas} tarefas restantes`);
  }


completasbtn.addEventListener("click", () => {
  const arrayCompletas = tasks.filter(task => task.completa == true)

  render(arrayCompletas);
});
})();

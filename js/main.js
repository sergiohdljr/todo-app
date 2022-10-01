(() => {
  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");
  const containerTasks = document.querySelector(".tasks-container-itens");

  let tasks = [];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    tasks.push({ titulo: `${input.value}`, completa: `${false}` });
    render();
    tarefasCount();

    input.value = "";
    input.focus();
  });

  function criarTask(titulo) {
    const taskItem = document.createElement("section");
    taskItem.classList.add("task-item");

    const taskTitleCompleted = document.createElement("div");
    taskTitleCompleted.classList.add("tasksTitle-completed");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.classList.add("taskCompleted");
    taskTitleCompleted.appendChild(checkBox);

    const tituloTask = document.createElement("p");
    tituloTask.textContent = `${titulo}`;
    taskTitleCompleted.appendChild(tituloTask);

    taskItem.appendChild(taskTitleCompleted);

    deleteTask(taskItem);

    return taskItem;
  }

  function deleteTask(tarefa) {
    const deletar = document.createElement("img");
    deletar.setAttribute("src", "./images/icon-cross.svg");
    deletar.classList.add("deletarTarefa");

    deletar.addEventListener("click", () => {
      deletar.parentElement.remove();
      tarefasCount();
    });

    tarefa.appendChild(deletar);
  }

  function render() {
    
    containerTasks.innerHTML = "";

    tasks.forEach((task) => {
      containerTasks.appendChild(criarTask(task.titulo));
    });
  }

  function tarefasCount() {
    const tasksNumbers = document.querySelector(".btn-filtro");
    let numeroTarefas = containerTasks.childNodes.length;

    numeroTarefas < 2
      ? (tasksNumbers.textContent = `${numeroTarefas} tarefa restante`)
      : (tasksNumbers.textContent = `${numeroTarefas} tarefas restantes`);
  }
})();

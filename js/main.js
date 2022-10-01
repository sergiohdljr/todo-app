(() => {
  
  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");
  const containerTasks = document.querySelector(".tasks-container-itens");
  let numeroTarefas = containerTasks.getElementsByTagName("section")

  let tasks = [];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    tasks.push({ titulo: `${input.value}`, completa: `${false}` });

    render();
    tarefasCount();

    input.value = "";
    input.focus();
    console.log(numeroTarefas.length)
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

    deletar.addEventListener("click", (e) => {
      const Elemento = e.target.parentElement;
      const indexObj = indexTarefa(Elemento);

      tasks.splice(indexObj,1)

      render()
      tarefasCount();
    });

    tarefa.appendChild(deletar);
  }

  function indexTarefa(tarefa){
    const indexElemento = [...numeroTarefas].indexOf(tarefa);

    return tasks[indexElemento]
  }

  function render() {
    containerTasks.innerHTML = "";

    tasks.forEach((task) => {
      containerTasks.appendChild(criarTask(task.titulo));
    });
  }

  function tarefasCount() {
    const tasksNumbers = document.querySelector(".btn-filtro");
    const tamanhoListaTarefas = numeroTarefas.length
    tamanhoListaTarefas < 2
      ? (tasksNumbers.textContent = `${tamanhoListaTarefas} tarefa restante`)
      : (tasksNumbers.textContent = `${tamanhoListaTarefas} tarefas restantes`);
  }
})();

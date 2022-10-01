(() => {

  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");
  const containerTasks = document.querySelector(".tasks-container-itens");
  let numeroTarefas = containerTasks.getElementsByTagName("section")

  let tasks = [];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    adicionarTarefas(input.value)
  
    render();
    tarefasCount();

    input.value = "";
    input.focus();

  });

  function adicionarTarefas(tituloTarefa){
    tasks.push({titulo: `${tituloTarefa}`, completa: false })
  }

  function criarTask(titulo) {
    const taskItem = document.createElement("section");
    taskItem.classList.add("task-item");

    const taskTitleCompleted = document.createElement("div");
    taskTitleCompleted.classList.add("tasksTitle-completed");

    checkbox(taskTitleCompleted);

    const tituloTask = document.createElement("p");
    tituloTask.textContent = `${titulo}`;
    taskTitleCompleted.appendChild(tituloTask);

    taskItem.appendChild(taskTitleCompleted);

    deleteTask(taskItem);

    return taskItem;
  }

  function checkbox(pai){
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.classList.add("taskCompleted");

      checkBox.addEventListener('change',(e)=>{

        const elemento = e.target.parentElement
        const elementopai = elemento.parentElement
        const indexObj = indexTarefa(elementopai)

        console.log(indexObj)
        const estado = tasks[indexObj].completa;
        
        const attEstado = tasks[indexObj].completa = estado ? false : true
        checkBox.checked = attEstado

        const paragrafo = elementopai.querySelector("p")
        paragrafo.classList.toggle("completa")

      })

      pai.appendChild(checkBox)
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
    
    return indexElemento

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

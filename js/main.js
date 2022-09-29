(() => {
  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");
  const containerTasks = document.querySelector(".tasks-container-itens");

  let tasks = [];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    tasks.push({ titulo: `${input.value}`, completa: `${false}` });
    console.log(tasks)
    
    render()
    tarefasCount();
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

    taskItem.appendChild(taskTitleCompleted)

    const img = document.createElement("img")
    img.setAttribute("src", "./images/icon-cross.svg");
    img.classList.add("deletarTarefa")

    taskItem.appendChild(img)
    containerTasks.appendChild(taskItem);
  }

function render(){
    containerTasks.innerHTML = ""

    tasks.map((task) => {
    criarTask(task.titulo);

  });
}

  function tarefasCount() {
    const tasksNumbers = document.querySelector(".btn-filtro");
    tasksNumbers.textContent = `${tasks.length} tarefas`;
  }


})();

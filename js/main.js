(() => {
  const input = document.querySelector(".input-form");
  const btn = document.querySelector(".btn");

  const containerTasks = document.querySelector(".tasks-container-itens");

  console.log(input);
  console.log(btn);
  console.log(containerTasks);

  let tasks = ["1", "2", "3", "6"];

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    tasks.push({ nome: `${input.value}`, completed: "false" });

    console.log(tasks);
  });

  function tarefasCount() {
    const tasksNumbers = document.querySelector(".btn-filtro");
    tasksNumbers.textContent = `${tasks.length} tarefas`;
  }

  tarefasCount()
})();

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');

  taskForm.addEventListener("submit", createTask)
});

function createTask(e) {
  e.preventDefault();
  const newTaskDesc = document.getElementById('new-task-description');
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDesc.value;

  appendNewTask(newTask);
  e.target.reset();
}

function appendNewTask(task) {
  document.getElementById('tasks').appendChild(task);
}
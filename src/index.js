document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDesc = document.getElementById('new-task-description');

  newTaskForm.addEventListener("submit", addNewTask);
});

function addNewTask(e){
  e.preventDefault();
  const newTask = document.getElementById('new-task-description');
  const task = document.createElement('li');

  task.innerText = newTask.value;

  appendTaskList(task);
  e.target.reset();
}

function appendTaskList(task) {
  document.getElementById('tasks').appendChild(task);
}
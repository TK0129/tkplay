const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }

  // Additional code to add the task will go here

  todoInput.value = ''; // Clear the input field after adding a task
});


function addTask(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task;

  // Additional functionality to be added here

  todoList.appendChild(listItem);
}


todoForm.addEventListener('submit', function(event) {
  // Existing code

  addTask(newTask); // Add the new task
});

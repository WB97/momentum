function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  saveTodo(todos);
  todoInput.value = null;
  paintTodo(newTodoObj);
}

function saveTodo(todo) {
  localStorage.setItem(TODO_KEY, JSON.stringify(todo));
}

function paintTodo(newTodo) {
  const createLi = document.createElement("li");
  const createSpan = document.createElement("span");
  const createButton = document.createElement("button");
  createLi.id = newTodo.id;
  createSpan.innerText = newTodo.text;
  createButton.innerText = "Delete";
  todoList.append(createLi);
  createLi.append(createSpan);
  createLi.append(createButton);

  createButton.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  console.log(todos.id);
  todos = todos.filter((item) => item.id !== parseInt(deleteLi.id));
  deleteLi.remove();
  saveTodo(todos);
}

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const todoInput = todoForm.querySelector("input");

const TODO_KEY = "todos";
const savedTodos = localStorage.getItem(TODO_KEY);

let todos = [];

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
} else {
}

todoForm.addEventListener("submit", handleTodoSubmit);

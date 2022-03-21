//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
//document.addEventListener("DOMContentLoaded", getTodos);
//todoList.addEventListener("click", deleteTodo);
//filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
    //Prevent natural behaviour
    e.preventDefault();
    console.log('hello');
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    // //Save to local - do this last
    // //Save to local
    // saveLocalTodos(todoInput.value);
    // //
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach in final Todo-list in html ul
    todoList.appendChild(todoDiv);
  }
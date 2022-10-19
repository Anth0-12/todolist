//selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ecouteurs

//pour ajouter un élément
todoButton.addEventListener("click", addTodo);

//pour supprimer un élément
todoList.addEventListener("click", deleteCheck)

//fonctions

//pour ajouter
function addTodo(event) {
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //créer le li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //bouton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //bouton supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

        //afficher todo à todo-list
        todoList.appendChild(todoDiv);

        //effacer le texte dans le champs de saisie
        todoInput.value = '';
}

//pour supprimer
function deleteCheck(e) {
    const item = e.target
    //supprimer todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}
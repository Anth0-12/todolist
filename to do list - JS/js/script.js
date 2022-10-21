//=============================== selecteurs ==============================
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoCont = document.querySelector(".todo-cont");
const fait = document.querySelector(".fait")
let countTodo = 1; // conteur d'ID

//=============================== ecouteurs ===============================

        //pour ajouter un élément
        todoButton.addEventListener("click", addTodo);

        //pour supprimer un élément
        todoCont.addEventListener("click", supprimer);

//============================ fonctions ===========================================

        //pour ajouter
        function addTodo(event) {
            event.preventDefault();

            //todo div
            const todoDiv = document.createElement("div");
            todoDiv.id = `todoId${countTodo}`; //numéro ID
            todoDiv.classList.add("todo");
            todoDiv.innerHTML =
                "<p class='tache' name='modifier' >" +
                todoInput.value +
                "</p><div class='action'><a href='#' class='complete-btn' onclick='changerCol(todoId" +
                countTodo +
                ")'><i class='fa fa-check'></i></a> <a href='#' class='modif-btn' name='modifier' onclick='editTodo(todoId" +
                countTodo +
                ")'><i class='fa-solid fa-pen'></i></a> <a href='#' class='trash-btn' onclick='supprimer(todoId" +
                countTodo +
                ")'><i class='fa fa-trash'></i></a></div > ";

            

            //afficher todo à todo-cont
            todoCont.appendChild(todoDiv);

            //effacer le texte dans le champs de saisie
            todoInput.value = '';

            countTodo++; // ajoute 1 à l'ID 

    // //modifier tâche
    // const modif = document.createElement("button");
    // modif.textContent = "modif"
    // todoDiv.appendChild(modif)

    //     modif.addEventListener("click", function (e) {
    //     const form = document.createElement("form")
    //     todoDiv.appendChild(form)
    //     form.classList.add("form-modif");

    //     const input = document.createElement("input")
    //     form.appendChild(input)
    //     modif-input.classList.add("modif-input");

    //     const bouton = document.createElement("button")
    //     form.appendChild(bouton)
    //     modif-btn.classList.add("modif-btn");
    // })

}

//pour supprimer
function supprimer(todoId) {
    todoId.remove()
}

//pour changer colonne gauche à droite
function changerCol(todoId) {
    fait.appendChild(todoId);
    todoCont.removeChild(todoId);
}

function updateTask() {
    let newTask = prompt("entrez la modification souhaitée");
    para.textContent = newTask;
  }
  
  function editTodo(todo) {
    console.log(todo);
  
    let newTask = prompt("entrez la modification souhaitée");
  
    todo.childNodes[0].textContent = newTask;
  }
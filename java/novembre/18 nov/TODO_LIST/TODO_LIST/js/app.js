// Sélection des éléments du DOM
const BTN_TOGGLE_FORM = document.querySelector(".toggleForm"); // Bouton pour afficher/masquer le formulaire
const TODO_FORM = document.querySelector(".todo-form"); // Formulaire pour ajouter une tâche
const COUNT = document.querySelector("#count"); // Compteur affichant le nombre de tâches
const CLEAR_ALL = document.querySelector(".clear-all"); // Bouton pour supprimer toutes les tâches
const TODO_LIST = document.querySelector(".todo-list"); // Liste où les tâches seront affichées
const REMIND_ALL = document.querySelector(".reminder-all"); // Bouton pour rappeler toutes les tâches

// Fonction pour créer une nouvelle tâche (todo)
function createTodo() {
  // Cette fonction sera utilisée pour générer une tâche avec un nom, une date, etc.
  // Elle pourrait retourner un objet représentant la tâche

  TODO_FORM.addEventListener("submit", function(e) {

    e.preventDefault();

    let inputtextTodo = document.getElementById('task').value;
    let inputdataTodo = document.getElementById('due-date').value;
    let inputreminder = document.getElementById('reminder').value;

    let newTodo = {
        id : Math.floor(Math.random() * 100000000) + 1,
        name: inputtextTodo,
        date: inputdataTodo,
        reminder: inputreminder,
    };

  });


  let listTodos = JSON.parse(localStorage.getItem("todos")) || [];
  listTodos.push(newTodo);
  localStorage.settems("todos", JSON.stringify(listTodos));
  TODO_FORM.reset();
  
}

// Fonction pour gérer l'ajout d'une tâche dans la liste
function handleAddTodoToList() {
  // Permet de récupérer les données du formulaire, créer une tâche et l'ajouter au DOM
}

// Fonction pour supprimer une tâche (éventuellement à appeler via un clic sur le bouton "X")
function deleteTodo() {
  // Cette fonction pourrait supprimer un élément spécifique de la liste des tâches
}

// Fonction pour supprimer une tâche en fonction de son id
function handleDeleteTodo(id) {
  // Supprime une tâche du DOM et du localStorage grâce à son identifiant unique
}

// Fonction pour compter le nombre total de tâches dans la liste
function getTodosCount() {
  // Retourne le nombre d'éléments présents dans la liste des tâches
}

// Fonction pour activer ou désactiver le rappel (reminder) d'une tâche
function toggleReminder() {
  // Modifie la classe ou une propriété pour indiquer si une tâche est en mode "rappel"
}

// Fonction pour afficher ou masquer le formulaire d'ajout
function toggleShowForm() {
  // Bascule la visibilité du formulaire en ajoutant/supprimant une classe CSS
}

// Fonction pour supprimer toutes les tâches
function deleteTodos() {
  // Vide la liste des tâches dans le DOM et dans le localStorage
}

// Fonction pour filtrer les tâches (par exemple, par date, nom, ou état)
function filterTodos() {
  // Applique un filtre sur la liste des tâches affichées
}

// Fonction pour gérer le changement de l'état du bouton de suppression
function handleDeleteButtonChange() {
  // Met à jour l'état du bouton "Clear All" en fonction de la présence ou non de tâches
}

// Fonction pour gérer le changement de l'état du bouton de filtre
function handleFilterButtonChange() {
  // Applique ou met à jour un filtre en fonction de certains critères (ex. rappel activé)
}

// Fonction pour charger les tâches depuis le localStorage au démarrage
function loadTodos() {
  let listTodos = JSON.parse(localStorage.getItem("todos")) || []; // Récupère la liste des tâches ou un tableau vide si rien n'existe

  // Pour chaque tâche récupérée, crée un élément HTML et l'ajoute à la liste
  listTodos.forEach(function(todo) {
    createLiTodo(todo); // Appelle une fonction pour créer un élément <li> pour chaque tâche
  });
}

// Fonction pour créer un élément <li> représentant une tâche
function createLiTodo(todo) {
  // Création de l'élément <li> pour représenter une tâche
  let li = document.createElement("li");
  li.className = "todo-item"; // Ajoute une classe CSS à l'élément <li>

  // Vérifie si la tâche a un rappel activé, et ajoute la classe "reminder"
  if (TODO_FORM.reminder) {
    li.classList.add("reminder");
  }

  li.id = todo.id; // Associe un identifiant unique à l'élément <li>

  // Création du premier <span> pour afficher le nom et la date de la tâche
  let span1 = document.createElement("span");
  span1.innerText = `${todo.name} - ${todo.date}`; // Affiche le nom et la date de la tâche
  li.append(span1); // Ajoute ce <span> à l'élément <li>

  // Création d'un second <span> pour le bouton de suppression ("X")
  let span2 = document.createElement("span");
  span2.innerText = "X"; // Texte du bouton
  span2.className = "delete-btn"; // Ajoute une classe CSS pour styliser ce bouton
  li.append(span2); // Ajoute ce <span> à l'élément <li>

  TODO_LIST.append(li); // Ajoute la tâche (l'élément <li>) à la liste des tâches (TODO_LIST)
}

// Charge les tâches existantes au démarrage
loadTodos();

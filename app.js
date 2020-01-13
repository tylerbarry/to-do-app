function onReady(){
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let newLi = document.createElement('li');


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      TODO_LIST.removeChild(this.parentElement);
});

    newLi.textContent = title;
    newLi.className += "mdl-list__item";
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    deleteBtn.className += "mdl-button mdl-js-button mdl-button--raised mdl-button--colored";
    checkbox.className += "mdl-checkbox mdl-js-checkbox";
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "Add a Task";
  });
};

window.onload = function(){
  onReady();
};

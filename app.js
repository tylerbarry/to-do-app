function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementByID('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementByID('newToDoText');
    if (!newToDoText.value) { return; }
    
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value='';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementByID('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};

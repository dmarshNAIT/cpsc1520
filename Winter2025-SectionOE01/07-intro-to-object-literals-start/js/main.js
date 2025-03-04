/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

let todos = [
  {
    description: 'Work on books example',
    complete: false
  },
  {
    description: 'Review objects',
    complete: true
  }
];

// TODO STEP 1:
// HIGH LEVEL PLAN:
// create the event listener that adds tasks to the page
// when we click submit: we take the inputted text and pass it to another function called addTask
// addTask: + the task to the array, & then call renderTasks
// renderTasks: + the task to the HTML

const form = document.getElementById('add-todo-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = form.elements['todo-description'].value;
  addTask(taskDescription);
  form.reset();
});

const addTask = (newTaskDescription) => {
  // create a new object
  const newTask = {
    description: newTaskDescription,
    complete: false
  };

  // add the object to the array
  todos.push(newTask);

  renderTasks();
  
};

const renderTasks = () => {
  const ul = document.querySelector('.todo-list');
  ul.innerHTML = '';

  todos.forEach((task, index, taskArray) => {
    // create a new li
    const newLi = `<li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="${index}"
            type="checkbox"
            value="todo-${index}"
            ${task.complete ? 'checked' : ''}>
        ${task.description}
    </li>`;

    // add the li to ul
    ul.innerHTML = ul.innerHTML + newLi;
  });
};

renderTasks();

// TODO STEP 2:
// create another event listener that updates the count when we CHANGE the status of a task

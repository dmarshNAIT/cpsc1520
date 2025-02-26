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
    description: 'Complete this example',
    complete: false,
  },
  {
    description: 'Learn about objects',
    complete: true,
  },
];

// TODO #1: let's add an event listener that waits for us to submit the form
// when the form is submitted, we will call a helper function called addTask(newTask)
// addTask will add our new task to the array
// then, it will call the helper function renderTasks
// renderTasks will make them appear on the webpage

let form = document.getElementById('add-todo-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let taskDescription = form.elements['todo-description'].value;
  addTask(taskDescription);
});

const addTask = (newTaskDescription) => {
  // create a new object to represent this new task
  const newTask = {
    description: newTaskDescription,
    complete: false,
  };
  //console.log(newTask);

  // add the task to the array
  todos.push(newTask);
  //console.log(todos);

  // call renderTasks
  renderTasks();
};

const renderTasks = () => {
  // HIGH LEVEL PLAN:
  // iterate through the elements in the array
  // and add each to the HTML content

  // PSEUDO-CODE:
  // for each element in the array
  // create a <li>
  // then add that <li> to the <ul>

  todos.forEach((task, index, todoList) => {
    const newLi =   `<li class="list-group-item">
                        <input class="form-check-input todo-status"
                            data-todo-id="${index}"
                            type="checkbox"
                            value="todo-${index}"
                            ${task.complete ? 'checked' : ''}>
                        ${task.description}
                    </li>`;

    const ul = document.querySelector('.list-group');

    ul.innerHTML = ul.innerHTML + newLi;
  });
};

// TODO #2: we'll add another event listener that waits for changes to the checkboxes (e.g. complete)
// it will call a helper function called calculateCount which will count the # of completed todos
// calculateCount will use reduce to get that number

// TODO: finishing touches: checking focus, reset

// TODO: add another priority/importance property

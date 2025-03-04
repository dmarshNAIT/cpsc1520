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

const calculateCompletedTasks = () => {
  // iterate through the todos array
  // count every completed task

  // v1: forEach
  // let count = 0;
  // todos.forEach((taskItem) => {
  //   if (taskItem.complete) count++;
  // });

  // v2: reduce      
  // reduce() takes an array --> reduces it down to a single value
  let count = todos.reduce((accumulator, taskItem) => {
    if (taskItem.complete) accumulator++;

    return accumulator;
  }, 0);

  // v3: filter & length
  // try this on your own!

  const spanElement = document.getElementById('todo-complete-count');
  spanElement.innerText = count;
}

calculateCompletedTasks();

const ulElement = document.querySelector('.todo-list');

ulElement.addEventListener('change', (event) => {
  const currentTask = event.target;
  //  console.log(currentTask);
  const taskIndex = currentTask.dataset.todoId;
  // console.log(taskIndex);
  
  // update the property of the object
  todos[taskIndex].complete = ! todos[taskIndex].complete;

  calculateCompletedTasks();
});

// CHALLENGES for extra practice:
// add validation so empty tasks cannot be added
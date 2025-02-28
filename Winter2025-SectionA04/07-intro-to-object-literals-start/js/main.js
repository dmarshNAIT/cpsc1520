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
    description: 'Clean room',
    complete: false,
  },
  {
    description: 'Breathe',
    complete: true,
  },
];

// TODO Part 1:
// create an event listener that is waiting for us to submit the form
// when the form is submitted, we grab the value the user typed and pass it to a function called addTask
// addTask: add the task to the array, then call renderTaskList
// renderTaskList: loop through the array, and add each li to the page

const form = document.getElementById('add-todo-form');
//console.log(form);
// or use the tag directly:
// const formV2 = document.querySelector('form');
// console.log(formV2);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputElement = form.elements['todo-description'];
  //console.log(inputElement.value);

  // grab the value & pass it to addTask function
  addTask(inputElement.value);
});

const addTask = (newTaskDescription) => {
  // create a task object
  const newTask = {
    description: newTaskDescription,
    complete: false,
  };

  // add that object to the array of task objects
  todos.push(newTask);
  //console.log(todos);

  renderTaskList();
};

const renderTaskList = () => {
  // loop through the elements in the array
  // for each element, create a li
  // add the li to the ul

  todos.forEach( (task, index) => {
       const checkedString = task.complete ? 'checked' : '';
       // conditional operator
       // if task.complete is true, we will use the value 'checked'
       // otherwise we'll leave the string empty

      const newLI = `<li class="list-group-item">
            <input class="form-check-input todo-status"
                data-todo-id="${index}"
                type="checkbox"
                value="todo-${index}"
                ${checkedString}>
            ${task.description}
        </li>`;

        const ul = document.querySelector('.todo-list');
        ul.innerHTML = ul.innerHTML + newLI;

  });

};

// TODO Part 2:
// create an event listener that is waiting for us to check or uncheck (CHANGE) a task on the page
// update the complete property of that object
// call a function named countCompletedTasks
// countCompletedTasks: count the # of complete tasks & update the HTML

// TODO: FINISHING TOUCHES
// resetting form, adding focus, initial rendering of the page

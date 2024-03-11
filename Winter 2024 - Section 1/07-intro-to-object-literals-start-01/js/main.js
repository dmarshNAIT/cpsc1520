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
        description: 'Todo 1',
        complete: false,

    },
    {
        description: 'Todo 2',
        complete: true,
    }
];

// create variables to represent the form, the list, and the count
const formElement = document.querySelector('#add-todo-form');
const listElement = document.querySelector('.todo-list');
const countElement = document.querySelector('#todo-complete-count');

// render initial list & count
renderList();
updateCount();

// + an event listener to the form that listens for a submit
    // instead of submitting, call a function to add the task, then reset form
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let toDoDescription = event.target.elements['todo-description'].value;
    addTask(toDoDescription);
    formElement.reset();
});

// create a function to addTask(description)
    // this creates an object, adds it to our array, and calls renderList()
function addTask(toDoDescription) {
    let newTask = {
        description: toDoDescription,
        complete: false
    };

    todos.push(newTask);

    renderList();
}

// create a function to renderList()
    // for each task in the array, add it to our HTML
function renderList() {
    listElement.innerHTML = '';

    todos.forEach( (todo, index) => {
        listElement.innerHTML += `
            <li class="list-group-item">
                <input class="form-check-input todo-status"
                    data-todo-id="${index}"
                    type="checkbox"
                    value="todo-${index}"
                    ${todo.complete ? 'checked' : ''}>
                ${todo.description}
            </li>`
    });
}

// + an event listener to the list that is listening for changes
listElement.addEventListener('change', (event) => {
    const currentCheckbox = event.target;

    // we will access the data-todo-id data attribute:
    const taskNumber = currentCheckbox.dataset.todoId;

    // toggle the complete property
    todos[taskNumber].complete = !todos[taskNumber].complete;

    // call a function to re-calculate the # of completed tasks
    updateCount();
});

// create a function to updateCount()
function updateCount() {
    let count = 0;

    // forEach() approach:
    // for each element in our array, if it's complete, +1 to count
    // todos.forEach( (todo) => {
    //     if (todo.complete) {
    //         count += 1;
    //     }
    // });
    
    // reduce approach:
    count = todos.reduce( (accumulator, todo) => {
        if(todo.complete) {
            return accumulator + 1;
        }
        else {
            return accumulator;
        }
    }, 0);
    
    // update the HTML to use that new count 
    countElement.innerText = count;
}
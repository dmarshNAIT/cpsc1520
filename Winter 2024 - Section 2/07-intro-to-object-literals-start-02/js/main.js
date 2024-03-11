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

// variable to represent list
const listElement = document.querySelector('.todo-list');
// variable to represent form
const formElement = document.querySelector('#add-todo-form');
// variable to represent completion count
const countElement = document.querySelector('#todo-complete-count');

updateCount();
renderList();

// add an event listener that is waiting for changes to a list item
listElement.addEventListener('change', (event) => {
    // checkbox will refer to the specific task we clicked on
    let checkbox = event.target;
    let taskID = checkbox.dataset.todoId; 
    // the handler will toggle the checkbox
    todos[taskID].complete = !todos[taskID].complete
    // the handler will call a function to update the count
    updateCount();
});

// updateCount() function:
function updateCount() {
    // iterate through the elements and count how many are complete
    let count = 0;

    // version 1: using forEach()
    // todos.forEach( (todo) => {
    //     if(todo.complete) {
    //         count += 1;
    //     }
    // } );

    // version 2: using reduce()
    count = todos.reduce( (accumulator, todo) => {
        if(todo.complete) {
            return ++accumulator;
        }
        else {
            return accumulator;
        }
    } , 0);

    // version 3: using filter()
    count = todos.filter( (todo) => { return todo.complete;}).length;

    countElement.innerText = count;
}

// + event listener to form submission
formElement.addEventListener('submit', (event) => {
    // prevent submission
    event.preventDefault();

    // add task
    let description = formElement.elements['todo-description'].value;
    addTask(description);

    // reset form
    formElement.reset();
});

// addTask() function
function addTask(taskDescription) {
    // create object & add it to the array
    let newToDo = {
        description: taskDescription,
        complete: false,
    };
    todos.push(newToDo);

    // call renderList
    renderList();
}

// renderList function: change innerHTML of the list
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
            </li>`;
    });
}

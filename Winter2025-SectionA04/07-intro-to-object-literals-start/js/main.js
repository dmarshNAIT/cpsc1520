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
    }
];

// TODO Part 1:
// create an event listener that is waiting for us to submit the form
// when the form is submitted, we grab the value the user typed and pass it to a function called addTask
// addTask: add the task to the array, then call renderTaskList
// renderTaskList: loop through the array, and add each li to the page

// TODO Part 2:
// create an event listener that is waiting for us to check or uncheck (CHANGE) a task on the page
// update the complete property of that object
// call a function named countCompletedTasks
// countCompletedTasks: count the # of complete tasks & update the HTML
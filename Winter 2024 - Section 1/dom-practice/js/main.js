// create variables
const taskList = document.querySelector('ul.tasks');

// create an event listener on the form
document.querySelector('#todo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // grab the values we need
    const newTask = document.querySelector('#task-input').value.trim();
    // call addTask(taskDescription)
    addTask(newTask);
});

function addTask(taskDescription){
    // create a list item
    const newLI = document.createElement('li');
    // add text to the list item
    const liText = document.createTextNode(taskDescription);
    newLI.appendChild(liText);
    // create a remove button
    const newButton = document.createElement('button');
    // add text to the remove button
    const buttonText = document.createTextNode('remove');
    newButton.appendChild(buttonText);
    // add a class to the remove button
    newButton.classList.add('remove');
    // add everything to the page
    newLI.appendChild(newButton);
    taskList.appendChild(newLI);
}

taskList.addEventListener('click', (event) => {
    // if the event.target's class list contains "remove"
    if(event.target.classList.contains('remove')) {
        // remove the parent of event.target
        event.target.parentElement.remove();
    }
});

// TO DO: finishing touches like focus & reset

// v2: when we add the element, also add a count, upvote button, downvote button

// v3: clicking upvote or downvote will adjust the count

// challenge v4: after we upvote or downvote, move that item in the list
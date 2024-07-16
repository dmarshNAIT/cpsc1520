const formElement = document.querySelector('form');

// create an event listener that is listening for form submissions
// instead of the default action, we will call a function named addTask()
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let newTaskDescription = formElement.querySelector('#input-field').value.trim();
    addTask(newTaskDescription);
    formElement.reset();
});

const taskListElement = document.querySelector('#task-list');

function addTask(taskDescription) {
    // add a new list item, including a 'remove' button
    const newLI = document.createElement('li');
    const liDescription = document.createTextNode(taskDescription);
    newLI.appendChild(liDescription);

    const removeButton = document.createElement('button');
    const buttonText = document.createTextNode('remove');
    removeButton.classList.add('remove');
    removeButton.appendChild(buttonText);
    newLI.appendChild(removeButton);

    taskListElement.appendChild(newLI);

    // TO DO: create a span with a starting value of 0
    // TO DO: create an upvote button, which contains text and a 'upvote' class
    // TO DO: create a downvote button, which contains text and a 'downvote' class 
}

// create an event listener that is listening for clicks on the 'remove' button
// when clicked, that item will be removed from the task list
taskListElement.addEventListener('click', (event) => {
    // if the event.target has the 'remove' class
    if(event.target.classList.contains('remove')) {
        // then we remove its parent
        event.target.parentElement.remove();
    }
    // TO DO: otherwise, if it's an upvote:
    // +1 to the span value

    // TO DO: otherwise, if it's a downvote:
    // -1 to the span value
});


// v2: add upvote & downvote buttons

// TO DO: final version finishing touches: reset, focus
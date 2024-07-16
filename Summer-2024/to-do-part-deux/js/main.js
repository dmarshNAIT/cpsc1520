const formElement = document.querySelector('form');

// create an event listener that is listening for form submissions
// instead of the default action, we will call a function named addTask()
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    let newTaskDescription = formElement.querySelector('#input-field').value.trim();
    addTask(newTaskDescription);
    formElement.reset();
});

function addTask(taskDescription) {
    // add a new list item, including a 'remove' button
    const newLI = document.createElement('li');
    const liDescription = document.createTextNode(taskDescription);
    newLI.appendChild(liDescription);

    const removeButton = document.createElement('button');
    const buttonText = document.createTextNode('remove');
    removeButton.appendChild(buttonText);
    newLI.appendChild(removeButton);

    document.querySelector('#task-list').appendChild(newLI);
}

// create an event listener that is listening for clicks on the 'remove' button
// when clicked, that item will be removed from the task list



// v2: add upvote & downvote buttons

// TO DO: final version finishing touches: reset, focus
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
    removeButton.appendChild(buttonText);
    removeButton.classList.add('remove');
    newLI.appendChild(removeButton);

    taskListElement.appendChild(newLI);

    // v2: adding upvote/downvote functionality
    const voteCountElement = document.createElement('span');
    const voteCount = document.createTextNode('0');
    voteCountElement.appendChild(voteCount);
    newLI.appendChild(voteCountElement);

    const upvoteButton = document.createElement('button');
    const upvoteText = document.createTextNode('upvote');
    upvoteButton.appendChild(upvoteText);
    upvoteButton.classList.add('upvote');
    newLI.appendChild(upvoteButton);

    const downvoteButton = document.createElement('button');
    const downvoteText = document.createTextNode('downvote');
    downvoteButton.appendChild(downvoteText);
    downvoteButton.classList.add('downvote');
    newLI.appendChild(downvoteButton);
}

// create an event listener that is listening for clicks on the 'remove' button
// when clicked, that item will be removed from the task list
taskListElement.addEventListener('click', (event) => {
    // if the event.target has the 'remove' class
    if(event.target.classList.contains('remove')) {
        // then we remove its parent
        event.target.parentElement.remove();
    }
    else if (event.target.classList.contains('upvote')) {
        let spanElement = event.target.previousElementSibling;
        let count = parseInt(spanElement.textContent);
        spanElement.textContent = count + 1;
    }
    else if (event.target.classList.contains('downvote')) {
        let spanElement = event.target.previousElementSibling.previousElementSibling;
        let count = Number(spanElement.textContent);
        spanElement.textContent = count - 1;
    }
});



// CHALLENGE TO DO:
// as items are up or downvoted, move them up/down in the list
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

    // v2: adding upvote/downvote functionality:
    // add a paragraph that includes some text
    const newP = document.createElement('p');
    const pText = document.createTextNode('0');
    newP.appendChild(pText);
    newLI.appendChild(newP);

    // add a button that includes some text and has the 'upvote' class applied
    const newUpvote = document.createElement('button');
    const upvoteText = document.createTextNode('upvote');
    newUpvote.appendChild(upvoteText);
    newUpvote.classList.add('upvote');
    newLI.appendChild(newUpvote);

    // add a button that includes some text and has the 'downvote' class applied
    const newDownvote = document.createElement('button');
    const downvoteText = document.createTextNode('downvote');
    newDownvote.appendChild(downvoteText);
    newDownvote.classList.add('downvote');
    newLI.appendChild(newDownvote);

}

taskList.addEventListener('click', (event) => {
    // if the event.target's class list contains "remove"
    if(event.target.classList.contains('remove')) {
        // remove the parent of event.target
        event.target.parentElement.remove();
    }
    // v3:
    // otherwise if the thing I clicked on has "upvote"
        // increase the number in the <p>

    // otherwise, if I clicked on "downvote"
        // decrease that number
});

// TO DO: finishing touches like focus & reset

// challenge v4: after we upvote or downvote, move that item in the list
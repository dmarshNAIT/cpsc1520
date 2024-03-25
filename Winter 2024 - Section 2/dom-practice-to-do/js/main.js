const formElement = document.querySelector('form');

// create an event handler for form submissions
formElement.addEventListener('submit', (event) => {
    // don't let the form actually submit
    event.preventDefault();
    // call addItem(newThing)
    let newFood = formElement.querySelector('#food-input').value.trim();
    addItem(newFood);
});

const listElement = document.querySelector('ul.list');

function addItem(newItem) {
    // create list item
    const newLI = document.createElement('li');
    // put text into the list item
    const newText = document.createTextNode(newItem);
    newLI.appendChild(newText);
    // create a remove button
    const newButton = document.createElement('button');
    // put text into the remove button
    const removeText = document.createTextNode('remove');
    newButton.appendChild(removeText);
    // add a class to the remove button
    newButton.classList.add('remove');
    // add everything to the page
    newLI.appendChild(newButton);
    listElement.appendChild(newLI);
}

// add an event handler to the list
listElement.addEventListener('click', (event) => {
    // if the event.target's class list includes 'remove'
    if(event.target.classList.contains('remove')) {
        // remove the event.target's parent
        event.target.parentElement.remove();
    }
});


// TO DO : finishing touches: focus, reset, etc?

// v2: add upvote, downvote buttons

// v3: add to our event handler such that the vote count gets updated

// challenge v4: as items are up or downvoted, move them up or down in the list
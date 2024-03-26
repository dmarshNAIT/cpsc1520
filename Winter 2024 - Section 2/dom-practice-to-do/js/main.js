const formElement = document.querySelector('form');

// create an event handler for form submissions
formElement.addEventListener('submit', (event) => {
    // don't let the form actually submit
    event.preventDefault();
    // call addItem(newThing)
    let newFood = formElement.querySelector('#food-input').value.trim();
    addItem(newFood);
    formElement.reset();
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

    // v2: add upvote & downvote buttons
    // create a span, which will include a text node with a starting value of 1
    const newSpan = document.createElement('span');
    const spanText = document.createTextNode('1');
    newSpan.appendChild(spanText);

    // create a upvote button, which will include text & the 'upvote' class
    const upvoteButton = document.createElement('button');
    const upvoteText = document.createTextNode('upvote');
    upvoteButton.classList.add('upvote');
    upvoteButton.appendChild(upvoteText);

    // create a downvote button, which will include text & the 'downvote' class
    const downvoteButton = document.createElement('button');
    const downvoteText = document.createTextNode('downvote');
    downvoteButton.classList.add('downvote');
    downvoteButton.appendChild(downvoteText);

    // add the span and the 2 new buttons to our LI
    newLI.appendChild(newSpan);
    newLI.appendChild(upvoteButton);
    newLI.appendChild(downvoteButton);
}

// add an event handler to the list
listElement.addEventListener('click', (event) => {
    // if the event.target's class list includes 'remove'
    if(event.target.classList.contains('remove')) {
        // remove the event.target's parent
        event.target.parentElement.remove();
    }
    // otherwise, if it's the upvote button, we will +1 to our span
    else if(event.target.classList.contains('upvote')) {
        let span = event.target.previousElementSibling;
        let num = Number(span.textContent);
        span.textContent = num + 1;
    }
    // otherwise, if it's the downvote button, we will -1 from our span
    else if (event.target.classList.contains('downvote')) {
        let span = event.target
            .previousElementSibling.previousElementSibling;
        let num = Number(span.textContent);
        span.textContent = num - 1;
    }
});


// TO DO : finishing touches: focus, reset, etc?



// challenge v4: as items are up or downvoted, move them up or down in the list
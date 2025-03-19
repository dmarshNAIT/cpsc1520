/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

const formElement = document.querySelector('form');
formElement.elements[0].focus();

// add an event listener to the form
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = event.target.elements['todo-item'].value;
  // or, using DOM properties: 
  // taskDescription = form.children[0].children[0].value
  addTask(taskDescription);
  formElement.reset();
  formElement.elements[0].focus();
});

// create an <ul> inside of the div.todo-list
const listElement = document.createElement('ul');
const divElement = formElement.nextElementSibling;
divElement.appendChild(listElement);

// add a li: the li will include a "remove" button: button.remove
// v2: add a counter, a "upvote" button, a "downvote" button
const addTask = (newTaskDescription) => {
  const liElement = document.createElement('li');
  const text = document.createTextNode(newTaskDescription);
  liElement.appendChild(text);

  // add "remove" button
  const removeButtonElement = document.createElement('button');
  const removeText = document.createTextNode('remove');
  removeButtonElement.appendChild(removeText);
  removeButtonElement.classList.add('remove');
  // another design idea: instead of a class, could use a data attribute. this makes it easier to use a switch in our click event handler.
  // removeButtonElement.setAttribute('data-button-type', 'remove');
  liElement.appendChild(removeButtonElement);

  // add a counter
  const spanElement = document.createElement('span');
  const counter = document.createTextNode('1');
  spanElement.appendChild(counter);
  liElement.appendChild(spanElement);

  // add "upvote" button
  const upvoteButtonElement = document.createElement('button');
  const upvoteText = document.createTextNode('upvote');
  upvoteButtonElement.appendChild(upvoteText);
  upvoteButtonElement.classList.add('upvote');
  liElement.appendChild(upvoteButtonElement);

  // add "downvote" button
  const downvoteButtonElement = document.createElement('button');
  const downvoteText = document.createTextNode('downvote');
  downvoteButtonElement.appendChild(downvoteText);
  downvoteButtonElement.classList.add('downvote');
  liElement.appendChild(downvoteButtonElement);

  listElement.appendChild(liElement);
}

// another event listener that is waiting for us to click on a button
listElement.addEventListener('click', (event) => {
    // if the thing we clicked on contains the "remove" class:
    // remove that element
    if(event.target.classList.contains('remove')) {
      event.target.parentElement.remove();
    }
    // if we clicked on "upvote"
    // +1 to the counter
    else if (event.target.classList.contains('upvote')) {
      const spanElement = event.target.previousElementSibling;
      spanElement.textContent = Number(spanElement.textContent) + 1;
    }

    // otherwise if we clicked on "downvote"
    // -1 from the counter
    else if (event.target.classList.contains('downvote')) {
      const spanElement = event.target.previousElementSibling.previousElementSibling;
      spanElement.textContent = Number(spanElement.textContent) - 1;
    }
});



/*
// If we were using a data-attribute
const btnType = event.target.dataset.action;

switch (btnType) {
  case 'remove':
    // Remove action
    break;
  case 'upvote':
    // Upvote action
   	break;
  case 'downvote':
    // Downvote action
   	break;
  default:
    // No data action defined
    break;
}

using a switch instead of an if/else 
*/
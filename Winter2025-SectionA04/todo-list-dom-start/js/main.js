/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to  use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

const form = document.querySelector('form');
form.elements[0].focus();
const ul = document.createElement('ul');
const div = form.nextElementSibling;
div.appendChild(ul);

// + an event listener to the form
// we will call a function called addTask(newTaskDescription)
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskDescription = event.target.elements['todo-item'].value;
  addTask(newTaskDescription);
  form.reset();
  form.elements[0].focus();
});

const addTask = (taskDescription) => {
  // v1: we will add a li containing text
  const li = document.createElement('li');
  const text = document.createTextNode(taskDescription);
  li.appendChild(text);

  // the li will contain a "remove" button
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  const removeText = document.createTextNode('remove');
  removeButton.appendChild(removeText);
  li.appendChild(removeButton);

  // + a counter initialized to 1
  const span = document.createElement('span');
  const counter = document.createTextNode('1');
  span.appendChild(counter);
  li.appendChild(span);

  ul.appendChild(li);

  // v2: add "upvote" & "downvote" buttons
  const upvoteButton = document.createElement('button');
  upvoteButton.classList.add('upvote');
  const upvoteText = document.createTextNode('upvote');
  upvoteButton.appendChild(upvoteText);
  li.appendChild(upvoteButton);

  const downvoteButton = document.createElement('button');
  downvoteButton.classList.add('downvote');
  const downvoteText = document.createTextNode('downvote');
  downvoteButton.appendChild(downvoteText);
  li.appendChild(downvoteButton);
  
}

// an event listener that is waiting for clicks on the buttons
ul.addEventListener('click', (event) => {
  // if I click "remove", remove that li
  if (  event.target.classList.contains('remove')   ) {
    event.target.parentElement.remove();
  }
  // if I click "upvote", +1 to the counter
  else if  (  event.target.classList.contains('upvote')   ) {
    const span = event.target.previousElementSibling;
    span.textContent = Number(span.textContent) + 1;
  }
  // if I click "downvote", -1 from the counter
  else if  (  event.target.classList.contains('downvote')   ) {
    const span = event.target.previousElementSibling.previousElementSibling;
    span.textContent = span.textContent - 1;
  }

});

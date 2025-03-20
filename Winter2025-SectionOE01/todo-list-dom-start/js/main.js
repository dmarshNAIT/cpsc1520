/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

const form = document.querySelector('form');
form.elements[0].focus();

// it will call a function named addTask(taskDescription)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskDescription = form.children[0].children[0].value;
    addTask(newTaskDescription);
    form.reset();
    form.elements[0].focus();
});

const div = form.nextElementSibling;
const ul = document.createElement('ul');
div.appendChild(ul);

// each task will be a li containing text, remove button, + the counter 
// v2: + 2 buttons to each task: upvote, downvote
// use classes to identify these. classes named "remove", "upvote", "downvote"
const addTask = (taskDescription) => {
  // create + add the li
  const li = document.createElement('li');
  const text = document.createTextNode(taskDescription);
  li.appendChild(text);

  // create + add the remove button
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  const removeText = document.createTextNode('remove');
  removeButton.appendChild(removeText);
  li.appendChild(removeButton);

  // create + add the counter
  const span = document.createElement('span');
  const counter = document.createTextNode('1');
  span.appendChild(counter);
  li.appendChild(span);
  
  // create + add the upvote button
  const upvoteButton = document.createElement('button');
  upvoteButton.classList.add('upvote');
  const upvoteText = document.createTextNode('upvote');
  upvoteButton.appendChild(upvoteText);
  li.appendChild(upvoteButton);

  // create + add the downvote button
  const downvoteButton = document.createElement('button');
  downvoteButton.classList.add('downvote');
  const downvoteText = document.createTextNode('downvote');
  downvoteButton.appendChild(downvoteText);
  li.appendChild(downvoteButton);

  ul.appendChild(li);
}

// if they upvote: +1 to the counter for that task
// if they downvote: -1 to the counter for that task
ul.addEventListener('click', (event) => {
  // if the thing I clicked on has the "remove" class
  // we want to remove that task
  if(event.target.classList.contains('remove')) {
    event.target.parentNode.remove();
  }
  else if(event.target.classList.contains('upvote')) {
    const span = event.target.previousElementSibling;
    // +1 to the counter
    span.textContent = Number(span.textContent) + 1;
  }
  else if(event.target.classList.contains('downvote')) {
    const span = event.target.previousElementSibling.previousElementSibling;
    // -1 from the counter
    span.textContent = span.textContent - 1;
  }
})
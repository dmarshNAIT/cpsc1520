/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// TODO: add an event listener to the form
// it will call a function named addTask(taskDescription)

// TODO: create addTask
// each task will be a li containing text
// v2: add a count + 3 buttons to each task: upvote, downvote, remove
// use classes to identify these. classes named "remove", "upvote", "downvote"

// TODO: create another event listener to handle clicks on the buttons
// if they click remove: we remove that task
// if they upvote: +1 to the counter for that task
// if they downvote: -1 to the counter for that task
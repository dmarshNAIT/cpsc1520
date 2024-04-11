/*
Using Classes and Objects.

In this example we're going to create a "Card" class this we can use to create objects
and manage DOM interaction with the user.

1. create a "Card" class in the "utils/card.js" file.
2. at the end of the file export the "Card" class and import it in the main.js file.
3. in the Card class, create a constructor that will take title and description
as an object.
4. import the create card js dom element from the "dom" folder like so.
    import { createCardElement } from '../dom/card.js';
5. in the constructor, create an attribute on the object (using this)
    called element using the createCardElement.
6. in the constrcutor, create attributes by selecting the "toLearnList" and "understoodLIst"
    with queryselector (in the future if we want to change this we can always pass these
    as arguments to the constructor).
7. create a function called render that will add the card element to the
    "toLearnList", as well we're going to call that function in the constructor
    so when you instantiate the new Card it adds it to the toLearnList
8. create a function called addEventListeners
    - select the "remove" button using the dom api and add a click event listener to that button
    - select the "top priority" button using the dom api and add a click event listener to that button
    - select the "i get this" button using the dom api and add a click event listener to that button

9. We're going to add methods on our class that we'll call in the event listeners
    from the last step:
    a. remove
        - calls this.element.remove()
    b. move to top
        - use the insert before and the first element
    c. move to understood
        - append this.element to the understood list
10. Add the necessary statement to create a new Card when the form is submitted.
*/

import { Card } from './utils/card.js'

// import our bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// render the following stickies as Cards
const stickies = [
  {
    title: 'learn classes',
    description: 'learn how the behaviour works',
  },
  {
    title: 'understand objects',
    description: 'know the difference between ',
  },
  {
    title: 'see how this is handy!',
    description: 'we can reuse this code and it\'s all in its\' own file which is really nice',
  },
  {
    title: 'just another sticky piece.',
    description: 'just an extra that we can see here.',
  },
];

stickies.forEach((stickyDetail) => {
  // create new cards
  new Card({title: stickyDetail.title, description: stickyDetail.description});
});

const newTopicForm = document.querySelector('#new-topic-form');

newTopicForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleElement = event.target.elements['title'];
  const descriptionElement = event.target.elements['description'];
  // create new card here
  new Card({title: titleElement.value, description: descriptionElement.value});
  titleElement.value = '';
  descriptionElement.value = '';
});

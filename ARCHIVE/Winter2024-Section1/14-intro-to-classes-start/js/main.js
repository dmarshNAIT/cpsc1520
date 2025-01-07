/*

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

import {Card} from './utils/card.js';

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

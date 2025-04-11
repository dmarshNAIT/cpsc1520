/*
Using Classes and Objects.

In this example we're going to create a "Card" class this we can use to create objects
and manage DOM interaction with the user.


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
 //  10. Add the necessary statement to create a new Card when the form is submitted.
  new Card({title: titleElement.value, description: descriptionElement.value});

  titleElement.value = '';
  descriptionElement.value = '';
});

/*
Read it, a simple reddit clone.

1. Setup npm, parcel and packages
    - install bootstrap
    - install parcel and set up
init        - import bootstrap
        - import main.js
2. Run the base server (in a separate folder) and ensure you understand how to interact with the api.
    NOTE: look at backend-json-server with the readit-db.json
3. Create api.js file to interact with our server.
    - talk about how to use promises when returning a promise.
    - create the different promises for
        - post
        - patch
    - talk about headers and how we need to specify "application/json" for
      the content type to make a header.
4. Use the api.js functions in the main.js 
    - in the create add a post with the api.
    - update the score in the "changescore" function
    - at the bottom of the file fetch all the posts

Note: talk about REST Clients
- Boomerang (https://boomerangapi.com/)
- Postman (https://www.postman.com/)

*/
import { getAllPosts, createNewPost, updateScore } from './api.js';

// call getAllPosts, then add each post to the page
getAllPosts().then((posts) => {
  // print the data to the console
  console.log(posts);
  // v2: add each post to the page
  posts.forEach((post) => {
    addReaditItem(post.title, post.url, post.score, post.id);
    // known small bug: the original posts are not ordered
  });
});

let allItems = document.querySelector('.readit-items');

let readitForm = document.querySelector('#add-readit-item');

// adding piece
readitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let form = event.target;
  let title = form.elements['title'];
  let url = form.elements['item-url'];
  console.log(title.value);
  console.log(url.value);
  // create a new post THEN add it to the page
  createNewPost({ title: title.value, url: url.value, score: 0 })
  .then(
    (post) => {
      addReaditItem(post.title, post.url, post.score, post.id);
    }
  );

  // reset elements
  title.value = '';
  url.value = '';
});

const addReaditItem = (title, url, score, id) => {
  // create the card
  let card = document.createElement('div');
  card.classList.add('card', 'mt-2'); // adds both classes
  card.setAttribute('data-post-id', id);
  //create card body
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'd-flex', 'flex-row');
  // create up button
  let upButton = document.createElement('button');
  upButton.classList.add('btn', 'vote-up', 'm-1', 'btn-secondary');
  upButton.textContent = 'up';
  // create score
  let scoreElement = document.createElement('p');
  scoreElement.classList.add('score', 'h4', 'm-2');
  // if score is provided, use it. otherwise default to 0
  if (score) scoreElement.textContent = score;
  else scoreElement.textContent = '0';
  // create down button
  let downButton = document.createElement('button');
  downButton.classList.add('btn', 'vote-down', 'm-1', 'btn-secondary');
  downButton.textContent = 'down';
  // create link
  let newLink = document.createElement('a');
  newLink.classList.add('h4', 'm-2');
  newLink.setAttribute('href', url);
  newLink.textContent = title;
  console.log(newLink);

  // patch altogether
  card.appendChild(cardBody);
  cardBody.appendChild(upButton);
  cardBody.appendChild(scoreElement);
  cardBody.appendChild(downButton);
  cardBody.appendChild(newLink);

  // append to list
  allItems.appendChild(card);
};

// Ranking Piece
allItems.addEventListener('click', (event) => {
  let element = event.target;

  if (element.classList.contains('vote-up')) {
    voteUp(element);
  } else if (element.classList.contains('vote-down')) {
    voteDown(element);
  }
});

const voteUp = (buttonElement) => {
  // gets the parent which is the element with the class "card-body"
  let cardBodyElement = buttonElement.parentNode;
  let scoreElement = cardBodyElement.children[1]; // the second element
  changeScore(scoreElement, 1);
};

const voteDown = (buttonElement) => {
  let cardBodyElement = buttonElement.parentNode;
  let scoreElement = cardBodyElement.children[1]; // the second element
  changeScore(scoreElement, -1);
};

const changeScore = (scoreElement, value) => {
  let currentScore = parseInt(scoreElement.textContent);
  
  const id = scoreElement.parentNode.parentNode.getAttribute('data-post-id');
  console.log(id);
  const newScore = currentScore + value;
  
  // call updateScore
  updateScore({id: id, score: newScore})
  // THEN change the text content on the page
  // THEN call changeItemOrder
  .then((post) =>  {
    console.log(post);
    scoreElement.textContent = post.score;
    changeItemOrder(scoreElement.parentNode);
  });

};

const changeItemOrder = (cardBodyElement) => {
  // below gets the parent of element with "card-body"
  // which is the element with the class "card"
  let cardElement = cardBodyElement.parentNode;
  // gets the element above in the list of elements
  let upperCardElement = cardElement.previousElementSibling;
  let lowerCardElement = cardElement.nextElementSibling;

  // they might be null so we have to check.
  if (upperCardElement) {
    swapItemsIfNecessary(upperCardElement, cardElement);
  }

  if (lowerCardElement) {
    swapItemsIfNecessary(cardElement, lowerCardElement);
  }
};

const swapItemsIfNecessary = (topCardElement, bottomCardElement) => {
  // traverse the tree down.
  let upperScoreElement = topCardElement.children[0].children[1];
  let lowerScoreElement = bottomCardElement.children[0].children[1];

  if (
    parseInt(lowerScoreElement.innerText) >
    parseInt(upperScoreElement.innerText)
  ) {
    let cardListElement = topCardElement.parentNode;
    console.log(cardListElement);
    cardListElement.insertBefore(bottomCardElement, topCardElement);

    upAnimation(bottomCardElement);
    downAnimation(topCardElement);
  }
};

// this css is given to us to add this
const ANIMATION_LENGTH = 1000;

const upAnimation = (element) => {
  element.classList.add('up-fade');
  setTimeout(() => {
    element.classList.remove('up-fade');
  }, ANIMATION_LENGTH);
};

const downAnimation = (element) => {
  element.classList.add('down-fade');
  setTimeout(() => {
    element.classList.remove('down-fade');
  }, ANIMATION_LENGTH);
};

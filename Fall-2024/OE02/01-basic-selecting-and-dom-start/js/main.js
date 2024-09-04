console.log('welcome, developers');

// correct the typos:
let typoElement = document.querySelector('#update-text p');
typoElement.innerText = 'Correct the typos in this text.';

// TO DO: add <strong> tags
let strongElement = document.querySelector('#update-html p');
let elementText = strongElement.innerText;
strongElement.innerHTML = '<strong>' + elementText + '</strong>';

// changed the last p to blue:
let colourElement = document.querySelector('#update-colour p');
colourElement.style.color = 'blue';

// YOUR CHALLENGES:
// first: change the first p to be italicized <i>
// 2: change the 2nd p to be any colour that isn't blue or black
// BONUS challenge: can you identify an element where the innerText and the innerHTML are different?
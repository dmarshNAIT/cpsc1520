console.log('linked!');

// let's fix the typo:
let typoElement = document.querySelector('#update-text p');
typoElement.innerText = 'Correct the typos in this text.';

// now let's add some tags:
let strongElement = document.querySelector('#update-html p');
strongElement.innerHTML = '<strong>' + strongElement.innerHTML + '</strong>';

// now let's change the colour:
let blueElement = document.querySelector('#update-colour p');
blueElement.style.color = 'blue';

// TWO CHALLENGES:
// "update text" --> make this your favourite colour
// "update HTML" --> add <i> 
// make sure I linked this correctly
console.log('linked!');

// fix the typo 
let typoElement = document.querySelector('#update-text p');
typoElement.innerText = 'Correct the typos in this text.';

// let's now add <strong> tags to the next paragraph
let strongElement = document.querySelector('#update-html p');
strongElement.innerHTML = '<strong>' + strongElement.innerText + '</strong>';

// now let's change the last element to blue
let blueElement = document.querySelector('#update-colour p');
blueElement.style.color = 'blue';

// TWO CHALLENGES:
// "Update text" --> make that your favourite colour
// "Update HTML" --> make it italicized
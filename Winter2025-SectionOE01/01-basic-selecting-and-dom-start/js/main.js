// let's make sure our JS file is correctly linked:
console.log('linked!');


// first, we will target the element with typos:
let typoElement = document.querySelector('#update-text p');
// now let's change the contents to a new message:
typoElement.innerText = 'Correct the typos in this text.';

// next, let's target the 2nd paragraph:
let strongElement = document.querySelector('#update-html p');
// we will replace its HTML contents with a pair of strong tags around the current contents:
strongElement.innerHTML = '<strong>' + strongElement.innerHTML + '</strong>';

// let's target the last paragraph:
let blueElement = document.querySelector('#update-colour p');
// and make it blue:
blueElement.style.color = 'blue';


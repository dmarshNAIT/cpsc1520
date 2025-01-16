// let's make sure our JS file is correctly linked:
console.log('linked!');

// first, we will target the element with typos:
let typoElement = document.querySelector('#update-text p');
// now let's change the contents to a new message:
typoElement.innerText = 'Correct the typos in this text.';

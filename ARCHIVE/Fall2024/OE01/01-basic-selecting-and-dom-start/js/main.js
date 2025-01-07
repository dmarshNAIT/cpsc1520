// this is a comment: it is just for humans

// print a message to confirm that my script is linked:
console.log('is this working?');

// let's do some formatting
let colourElement = document.querySelector('#update-colour p');
colourElement.style.color = 'blue';

// for practice:
// try changing the text of the 2nd paragraph to something else
let paragraphTwo = document.querySelector('#update-html p');
paragraphTwo.innerText = 'something else';

// try changing the colour of the 1st paragraph to something else
let testElement = document.querySelector('section:first-child p');
testElement.style.color = 'chartreuse';

// stretch challenge:
// add a <strong> tag to the 2nd paragraph using innerHTML
paragraphTwo.innerHTML = '<strong>' + paragraphTwo.innerText + '</strong>';
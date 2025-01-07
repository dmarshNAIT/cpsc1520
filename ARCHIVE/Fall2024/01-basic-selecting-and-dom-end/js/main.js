// this is our JavaScript file
console.log('output to the browser console, usefulf for simple debugging');

// select the desired element using document.querySelector()
let updateText = document.querySelector('#update-text > p');

// use the dot operator to access the innerText property of the element
updateText.innerText = 'Correct the typos in this text.';

let updateHTML = document.querySelector('#update-html > p');
let currentText = updateHTML.innerText;
updateHTML.innerHTML = '<strong>' + currentText + '</strong>';

let updateColour = document.querySelector('#update-colour > p');
updateColour.style.color = 'blue';

// on your own, try to wrap the corrected text in the first paragraph in <i> tags
// on your own, change the colour of the second h2 to red

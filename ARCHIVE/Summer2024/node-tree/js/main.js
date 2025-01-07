console.log('hello');

// create some variables
// CHALLENGE: we will only use querySelector ONE time
const firstDivElement = document.querySelector('#firstDiv');


// create a new element for the letter E
const eMovieElement = document.createElement('p');
const eMovieText = document.createTextNode('Elf');
eMovieElement.appendChild(eMovieText);

// we will add this to the end of the first div
firstDivElement.appendChild(eMovieElement);

// create a new element for the letter F
const fMovieElement = document.createElement('p');
const fMovieText = document.createTextNode('Fast & Furious');
fMovieElement.appendChild(fMovieText);

// we will add this BEFORE Cars
const cMovieElement = eMovieElement.previousElementSibling;
firstDivElement.insertBefore(fMovieElement, cMovieElement);

// let's now remove Dune without creating any new variables
// cMovieElement.parentNode.nextElementSibling.firstElementChild.remove();

// and here's the same thing taking the longest possible route (hitting every element once)
eMovieElement
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .parentNode
    .parentNode
    .children[1] // access the div at index 1, AKA the 2nd div
    .lastElementChild
    .remove();
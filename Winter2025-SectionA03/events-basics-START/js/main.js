// let's make sure our JS file is correctly linked
console.log('can you see this? if so, yay.');

// part 1:
//  let's create variables to reference a few HTML elements on our page:
const buttonElement = document.querySelector('.btn');
const counterElement = document.querySelector('span.counter');

//console.log('Here are the contents of my variables:');
//console.log(buttonElement);
//console.log(counterElement);

// add an event listener to the button
buttonElement.addEventListener('click', () => {
    // every time we click the button, the counter will increment by 1
    let count = parseInt(counterElement.innerText);
    counterElement.innerText = count + 1;

    // or:
    // counterElement.innerText = parseInt(counterElement.innerText) + 1;
});

// part 2:
// we are going to prevent this link from performing its default behaviour
// because we aren't re-using the link element later, we don't HAVE to make it a variable:
document.querySelector('.link').addEventListener('click', (event) => {
    // preventing the default behaviour, which would be opening the link
    event.preventDefault();
    // instead, we'll print a message to the console:
    console.log('Nope.');
});

// part 3:
const colourfulElement = document.querySelector('.colours');

// create an event listener on the div.colours
colourfulElement.addEventListener('click', (evt) => {
    console.log(evt.target);
    // event.target is the specific element we clicked on, within colourfulElement

    // when we click on a child div, we will get the class name of that child element
    const colourName = evt.target.className;
    console.log(colourName);

    // we will use that colour to set the new background colour of the webpage
    document.body.style.backgroundColor = colourName;
});
// make sure our JS is correctly linked
console.log('if you can see this, we are linked');

// part 1: adding an event listener to a button
// create variables to represent the button element, & another for the counter
let buttonElement = document.querySelector('button');
//console.log(buttonElement);
let counterElement = document.querySelector('.counter');
//console.log(counterElement);

// we will add an event listener to the button, that's waiting for a 'click'
buttonElement.addEventListener('click', () => {
    // the event handler will grab the current value of the counter and + 1
    let currentValue = parseInt(counterElement.innerText);
    //console.log(currentValue);
    counterElement.innerText = currentValue + 1;
});

// part 2: preventing default actions
document.querySelector('a').addEventListener('click', (evt) => {
    // preventing the link from opening
    evt.preventDefault();
    console.log('Nope.')
});

// part 3: playing with page style
// create a variable to represent the "colours" div
const colourfulElement = document.querySelector('.colours');
//console.log(colourfulElement);

// add an event listener that's waiting for a 'click' somewhere in that div
colourfulElement.addEventListener('click', (event) => {
    // in the event handler, we'll get the colour of the box we clicked on
    //console.log(event.target);
    const colourName = event.target.className;
    // and use that to change the colour of the entire page
    //console.log(colourName);
    document.body.style.backgroundColor = colourName;
});

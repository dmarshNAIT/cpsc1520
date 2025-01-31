// make sure that my script is linked:
console.log('I am IN!');

// part 1: add an event listener to the button
// create a variable to represent the button
const buttonElement = document.querySelector('.btn');
const counterElement = document.querySelector('.counter');

//console.log('printing out the variables we created:')
//console.log(buttonElement);
//console.log(counterElement);

// when the button is clicked, add 1 to the button text
buttonElement.addEventListener( 'click', () => {
    // let's get the current value of the counter
    let currentValue = counterElement.innerText;
    //console.log(currentValue);
    //console.log(typeof currentValue);
    // then add 1 to it
    counterElement.innerText = parseInt(currentValue) + 1;
} );

// part 2: preventing default behaviour
// create a variable to represent the link
const naitLink = document.querySelector('.link');
//console.log(naitLink);

// add an event listener to the link, waiting for a click.
// when we click, prevent the default behaviour of the links
naitLink.addEventListener('click', (evt) => {
    // evt is an abbreviation for "event": use whichever name you prefer
    evt.preventDefault();
    console.log('you shall not go there!');
} );

// version 2: here's what that looks like if we create the function first:
function handler(evt) {
    evt.preventDefault();
    console.log('you shall not go there!');
};
document.querySelector('.link').addEventListener('click', handler);

// part 3: let's change the colour of the page
const colourBox = document.querySelector('.colours');
//console.log(colourBox);

// add an event listener to the colours div
colourBox.addEventListener('click', (event) => {
    // when we click on a colour, we'll get the colour of that box
    console.log('here is what we clicked');
    console.log(event.target);
    let colourName = event.target.className;

    // and use that to change the style of the page
    document.body.style.backgroundColor = colourName;
});

// part 4:
// intercepting the form submission
// create a variable to represent the form
const form = document.querySelector('.form');
// add an event listener waiting for a 'submit' event
form.addEventListener('submit', (event) => {
    // when the form is submitted, prevent the default behaviour
    event.preventDefault();
    // instead, we will print the value inputted to the console
    console.log(form.elements.test);
    console.log(form.elements.test.value);
});
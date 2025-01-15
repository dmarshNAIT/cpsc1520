// this is our javascript file.
console.log('linked!');

// create a function called getName()
// pop up a window asking for the name
// return the name
const getName = () => {
    let userName = prompt('What is your name?');
    return userName;
}

// we can shorten the function as follows:
const getName2 = () => prompt('What is your name?');

// create a function called updateHeading()
// this function will call getName()
// use the returned value to update the h1
const updateHeading = () => {
    const userName = getName();
    const spanElement = document.querySelector('#username');
    spanElement.innerText = userName;
}

// and another version that combines those into a single statement:
const updateHeading2 = () => document.querySelector('#username').innerText = getName();


// create a function called updateDescription()
// this function will prompt the user for a number
// then prompt the user for another number
// then change the description to contain "num1 + num2 = sum"
const updateDescription = () => {
    const num1 = prompt('Enter 1st number:');
    const num2 = prompt('Enter 2nd number:');
    const sum = num1 + num2;
    const descriptionElement = document.querySelector('.description');
    descriptionElement.innerText = num1 + " + " + num2 + " = " + sum;
    // THIS DOESN'T QUITE WORK YET
    // YOUR CHALLENGE: use Number() or parseInt() or implicit conversion to fix this
    // WE WILL REVISIT THIS NEXT WEEK
}

// call the functions to update the page
updateHeading();
updateDescription();
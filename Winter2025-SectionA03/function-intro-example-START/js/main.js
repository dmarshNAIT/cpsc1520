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
    const num2 = parseInt(prompt('Enter 2nd number:'));
    const sum = Number(num1) + num2; // 2 different ways to turn it into a #
    const descriptionElement = document.querySelector('.description');
    // 2 ways to show our output:
    // v1: string concatenation
    descriptionElement.innerText = num1 + " + " + num2 + " = " + sum;
    // v2: string interpolation
    descriptionElement.innerText = `${num1} + ${num2} = ${sum}`;
}
// ideally we should be consistent in how we do type coercion e.g. always use Number
// or always use parseInt etc
// we are using a variety just so we have examples of each

// call the functions to update the page
updateHeading();
updateDescription();
// this is our javascript file.

// prompt the user for their name
function getUsername() {
    let username = prompt('Please enter your name.');
    return username;
}

// create function to get user's input on description
function getDescription() {
    let description = prompt('Please enter your customized description:');
    return description;
}

// this function REPLACES the previous 2 functions
function getUserResponse(promptMessage) {
    let userResponse = prompt(promptMessage);
    return userResponse;
}

// display the user's name on the web page
function updateUsername() {
    let username = getUsername();
    let usernameElement = document.querySelector('#username');
    usernameElement.innerText = username;
}

// create function to update the description on the page
function updateDescription() {
    let description = getDescription();
    let descriptionElement = document.querySelector('.description');
    descriptionElement.innerText = description;
}

function updateElement(promptMessage, selectorString) {
    let userResponse = getUserResponse(promptMessage);
    let htmlElement = document.querySelector(selectorString);
    htmlElement.innerText = userResponse;
}

function runCalculator() {
    // get the first number
    let firstNumber = getUserResponse('Please enter your first number.');
    firstNumber = Number(firstNumber);
    
    // get the 2nd number
    let secondNumber = Number(getUserResponse('Please enter second number.'));
    
    // calculate the sum
    let sum = firstNumber + secondNumber;

    // display the sum 
    // v1: the sum is 4
    console.log("the sum is " + sum);

    // v2: 1 + 3 = 4
    console.log(firstNumber + ' + ' + secondNumber + ' = ' + sum);
    // string interpolation
    console.log(`${firstNumber} + ${secondNumber} = ${sum}`);

    // v3: display that on the screen
    let htmlElement = document.querySelector('.description');
    htmlElement.innerText = `${firstNumber} + ${secondNumber} = ${sum}`;
}

// call functions:
//updateUsername();
updateElement('Please enter your name.', '#username');
//updateDescription();
//updateElement('Please enter your description.', '.description');

runCalculator();

// Challenges:
// 😲: add a little calculator feature: prompt the user for 2 numbers, calculate the sum and display it



// another approach instead of prompting would be to generate random numbers
// getRandomInt()
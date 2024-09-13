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

// call functions:
//updateUsername();
updateElement('Please enter your name.', '#username');
//updateDescription();
updateElement('Please enter your description.', '.description');

// Challenges:
// 💗: instead of separate get functions, can we create one function that works for both?
// 😆: instead of separate update functions, can we create 1 that works for both?
// 😲: add a little calculator feature: prompt the user for 2 numbers, calculate the sum and display it
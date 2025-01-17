// this is our javascript file.
console.log('linked!');

// 1. create a function that gets the user's name
const getUserName = function() {
    let username = prompt('Please enter your name.');
    return username;
}

// 2. create a function that updates the website using the user's name
const updateName = () => {
    // call getUserName to get the user'a name
    let name = getUserName();
    // create a variable that represents the username element on the page
    let usernameElement = document.querySelector('#username');
    // update the contents of that variable
    usernameElement.innerText = name;
}

// 3. call those functions
updateName();

// 4. update the description using ANOTHER function 
// CHALLENGE:
// create a function called updateDescription
// this function will prompt the user for 2 numbers
// it will calculate the sum of those 2 numbers
// create a variable that represents the description element in the HTML
// change the contents of the description element to be "firstNum + secondNum = sum"
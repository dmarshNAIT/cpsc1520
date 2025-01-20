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

// 3. call the function
updateName();

// 4. update the description using ANOTHER function 
function updateDescription() {
    // prompt the user for 2 numbers:
    let num1 = prompt('Enter a number.');
    num1 = Number(num1);
    //const alternateNum1 = Number(prompt('Enter a number'));
    let num2 = prompt('Enter another number.');
    num2 = parseInt(num2);
    // calculate sum:
    const sum = num1 + num2;
    // a quick test:
    //console.log(sum);
    // create a variable that represents the description element in the HTML
    const descElement = document.querySelector('.description');
    console.log(descElement); // REMOVE THIS LATER, JUST FOR TESTING/DEBUGGING
    // change the contents of the description element to be "firstNum + secondNum = sum"
    // 2 ways to do this:
    // string concatenation:
    descElement.innerText = num1 + ' + ' + num2 + ' = ' + sum;
    //or string interpolation:
    descElement.innerText = `${num1} + ${num2} = ${sum}`;
}
//call the function:
updateDescription();
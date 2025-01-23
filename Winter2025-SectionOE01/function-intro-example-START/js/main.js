// this is our javascript file.
console.log("if you can see this, the script has run.");

// 1. create a function called getName
// prompt the user for their name, and then return it.
const getName = function () {
  let userName = prompt("What is your name?");
  return userName;
};

// 2. create a function called updateName
// call getName() to get the user's name
function updateName() {
    let userName = getName();
    // create a variable to represent the welcome message
    // we could use getElementByID
    let spanElement = document.getElementById('username');
    // or we could use querySelector
    // spanElement = document.querySelector('#username');
    // replace "username" with the user's name
    spanElement.innerText = userName;
}

// 3. call updateName()
updateName();

// 4. create a function called updateDescription
// it will prompt the user for 2 numbers
// then display the sum
// e.g. if the user entered 4 and 5
// the description would read "4 + 5 = 9"
const updateDescription = () => {
  // there are 2 ways to turn a string into a number: we'll do one of each.
  const num1 = Number(prompt('Please enter a number.'));
  const num2 = parseInt(prompt('Please enter another number.'));
  const sum = num1 + num2;

  const newContent = 'The sum is ' + sum;

  updateElement('.description', newContent);
};

// 4b. create a function called updateElement
// 2 parameters: one representing the selector, and another representing the new text
const updateElement = (selector, newText) => {
  document.querySelector(selector).innerText = newText;
};

// 5. call updateDescription()
updateDescription();

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
    let spanElement = //TODO
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

// 5. call updateDescription()

/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters

4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
// if character in correct place; // - if it is add the 'correct-letter-placement' class to the element

// if in word :
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above


*/

// an array to hold all our guesses:
let guesses = [];
// a variable to hold the secret word:
let answer = 'voice';

// TODO: event listener

// 3. Create a function called "addguess" which pushes the guess on the guesses array
//    Note: this is going to to take our new guess as a parameter
const addGuess = (newGuess) => {
   guesses.push(newGuess);

   console.log('here is the contents of our guesses array', guesses);
}

// TODO: showGuessOnPage function

// d. create a isCharacterInCorrectPlace function to check if the character is in the right index of the word
const isCharacterInCorrectPlace = (character, index) => {
   return character === answer[index];
   //or 
   // let inCorrectPlace = (character === answer[index]);
   // return inCorrectPlace;
}

// e.  create a isCharacterInWord function to check if the character is in the function
const isCharacterInWord = (character) => {
   let inWord = answer.includes(character);
   return inWord;
}

// 6. Show the message in the element with the class wordle-success if it's successful
const isWordCorrect = () => {
   // check if the actual answer is in the guesses array
   // if so, remove 'hidden' from the success message element
}
/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters
3. Create a function called "addguess" which pushes the guess on the guesses array
   Note: this is going to to take our new guess as a parameter
4. only call the add guess function if the form is valid
5. Create a showGuessOnPage function which will show the guess on the page
    a. return early if there are no guesses
    b. create a selector that will select the guess row characters as a nodelist
    c. using foreach and your knowledge of accessing indexes to add each letter to
       each element
    d. create a isCharacterInCorrectPlace function to check if the character is in the right
       index of the word
       - if it is add the 'correct-letter-placement' class to the element
       - return the function early if it is so that we can check the next character
    e.  create a isCharacterInWord function to check if the character is in the function
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above
6. Show the message in the element with the class wordle-success if it's successful
   Note: you can use includes on an array!
   We're going to create a function that will check this each guess!

*/

let guesses = [];
const answer = 'goose';

// TODO: add event listener

const addGuess = (newGuess) => {
   guesses.push(newGuess);

   console.log('Current contents of guesses array: ', guesses);
}

// TODO: showGuessOnPage
// check to make sure we have 1+ guesses

// select the guess row e.g. guess-0

// add each letter to the corresponding letter div

// if that letter is in correct place:
   // + 'correct-letter-placement' class
// if not, check if it's elsewhere in the word
   // + 'ncorrect-letter-placement '

const isCharacterInCorrectPlace = (character, index) => {
   // check if character matches the letter at position "index" in answer
   // return true if so, false otherwise
  return character === answer[index];
}

const isCharacterInWord = (character) => {
   // includes() is a function for arrays
   // as strings are just an array of characters, this works!
   return answer.includes(character);
}

const checkIfCorrect = () => {
   // look through our guesses and see if the answer is in the array
   if (guesses.includes(answer)){
      // if so: remove the class called 'hidden' from the wordle-success element
         document.querySelector('.wordle-success').classList.remove('hidden');
   }
}
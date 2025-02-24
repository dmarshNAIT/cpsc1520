/*
We're going to build wordle without the keyboard.

1. Add an event listener that listens to the form
2. Validate if the value to see if it's five characters AND make sure it's not already been guessed
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
const answer = 'moose';

// TODO: create event listener
// validate that the input has 5 chars
// mark it as invalid if not

// if it's valid:
// addGuess()
// showGuessOnPage()
// checkIfCorrect()

const addGuess = (newGuess) => {
   guesses.push(newGuess);

   console.log('Current guesses:', guesses);
}

const showGuessOnPage = () => {
   // check to see if there are 1+ guesses
   if (guesses.length > 0) {
      const guessNum = guesses.length - 1;
      // create a selector to represent the set of 5 characters
      const selector = `.guess-${guessNum} .guess-character`;
      const divList = document.querySelectorAll(selector);
      // iterate through each character:
         // add the letter to the HTML
         // check isCharacterInCorrectPlace
         // check isCharacterInWord
      divList.forEach( (element, index, array) => {
            let currentGuess = guesses[guessNum];
            let currentLetter = currentGuess[index];
            element.innerText = currentLetter;

            // or:
            element.innerText = guesses[guessNum][index];

            // if the current letter of the guess is in the correct place in the answer, add a class
            if (isCharacterInCorrectPlace(currentLetter, index)) {
                  element.classList.add('correct-letter-placement');
            }
            // if not but it's somewhere in the word, add another class
            else if (isCharacterInWord(currentLetter)) {
               element.classList.add('incorrect-letter-placement');
            }
      });
   }
}

const isCharacterInCorrectPlace = (character, index) => {
   return  character === answer[index] ;
}

const isCharacterInWord = (character) => {
   return answer.includes(character);
}

const checkIfCorrect = () => {
   // check if the answer is in our list of guesses
   if (guesses.includes(answer)) {
      // if so, remove the 'hidden' class from the success element
      document.querySelector('.wordle-success').classList.remove('hidden');
   }
}

// POSSIBLE TODO: LIST
// instead of hardcoding a word, randomly select one from a list of words
// or, read it in from a list of options (THIS IS FOR FUTURE US ONCE WE LEARN HOW TO READ FROM A FILE)
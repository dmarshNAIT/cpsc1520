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
if character in correct place; // - if it is add the 'correct-letter-placement' class to the element

if in word :
        - add the incorrect-letter-placement class to the element if it is
        - Note if it's in the correct placement it should have been true in the function
          above


*/

// an array to hold all our guesses:
let guesses = [];
// a variable to hold the secret word:
let answer = 'turtl';

// TODO: event listener

// 3. Create a function called "addguess" which pushes the guess on the guesses array
//    Note: this is going to to take our new guess as a parameter
const addGuess = (newGuess) => {
  guesses.push(newGuess);

  console.log('here is the contents of our guesses array', guesses);
};

const showGuessOnPage = () => {
   // make sure there's at least 1+ guess
   if (guesses.length > 0) {
      // select the guess row characters
      const guessNumber = guesses.length - 1;
      const selector = `.guess-${guessNumber} .guess-character`;
      let characterDisplays = document.querySelectorAll(selector);

      characterDisplays.forEach((divElement, index)=>{ 
         // we didn't include array as a param, as we don't need it
         // for each character: add the letter to the HTML
         const currentGuess = guesses[guessNumber];
         const currentLetter = currentGuess[index];
         divElement.innerHTML = currentLetter;

         // or, without those helper variables:
         divElement.innerHTML = guesses[guessNumber][index];

         // then check for green (character is in correct place)
         if (isCharacterInCorrectPlace(currentLetter, index)) {
            divElement.classList.add('correct-letter-placement');
         }
         // then check for yellow (character is in wrong place)
         else if (isCharacterInWord(currentLetter)) {
            divElement.classList.add('incorrect-letter-placement');
         }
      });
   }
}

// d. create a isCharacterInCorrectPlace function to check if the character is in the right index of the word
const isCharacterInCorrectPlace = (character, index) => {
  return character === answer[index];
  //or
  // let inCorrectPlace = (character === answer[index]);
  // return inCorrectPlace;
};

// e.  create a isCharacterInWord function to check if the character is in the function
const isCharacterInWord = (character) => {
  let inWord = answer.includes(character);
  return inWord;
};

// 6. Show the message in the element with the class wordle-success if it's successful
const isWordCorrect = () => {
  // check if the actual answer is in the guesses array
  if (guesses.includes(answer)) {
    // if so, remove 'hidden' from the success message element
    document.querySelector('.wordle-success').classList.remove('hidden');
  }
};

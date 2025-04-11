// 4. import the create card js dom element from the "dom" folder like so.
import { createCardElement } from '../dom/card.js';

// 1. create a "Card" class in the "utils/card.js" file.
class Card {
  // 3. in the Card class, create a constructor that will take title and description as an object.
  constructor({title, description}){
    //5. in the constructor, create an attribute on the object (using this) called element using the createCardElement.
    this.element = createCardElement({title, description});

    // 6. in the constrcutor, create attributes by selecting the "toLearnList" and "understoodLIst" with queryselector (in the future if we want to change this we can always pass these  as arguments to the constructor).
    this.toLearnList = document.querySelector('.to-learn-stickies');
    this.understoodList = document.querySelector('.understood-stickies');
    this.render();
    this.addEventListeners();
  }

  // a function to add the Card to the page
  // 7. create a function called render that will add the card element to the  "toLearnList", as well we're going to call that function in the constructor so when you instantiate the new Card it adds it to the toLearnList
  render() {
    this.toLearnList.appendChild(this.element);
  }



  // a function to add some event listeners
  // 8. create a function called addEventListeners
    // - select the "remove" button using the dom api and add a click event listener to that button
    // - select the "top priority" button using the dom api and add a click event listener to that button
    // - select the "i get this" button using the dom api and add a click event listener to that button
  addEventListeners(){
    const removeButton = this.element.firstElementChild.children[2];
    removeButton.addEventListener('click', () => {
        this.remove();
    });

    const priorityButton = removeButton.nextElementSibling;
    priorityButton.addEventListener('click', () => {
        this.moveToTop();
    });

    const understoodButton = priorityButton.nextElementSibling;
    understoodButton.addEventListener('click', () => {
        this.moveToUnderstood();
    });
  }


    // 9. We're going to add methods on our class that we'll call in the event listeners
    // from the last step:
    // a. remove
    //     - calls this.element.remove()
    remove() {
        this.element.remove();
    }
    // b. move to top
    //     - use the insert before and the first element
    moveToTop() {
        this.toLearnList.insertBefore(this.element, this.toLearnList.firstElementChild);
    }
    // c. move to understood
    //     - append this.element to the understood list
    moveToUnderstood() {
        this.understoodList.appendChild(this.element);
    }
  // a function to remove an element
  // a function to move the element to top priority
  // a function to mark a concept as "understood"
}

// 2. at the end of the file export the "Card" class and import it in the main.js file.
export { Card };

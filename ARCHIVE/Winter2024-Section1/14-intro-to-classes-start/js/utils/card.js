import { createCardElement } from "../dom/card.js";

class Card {
  constructor({ title, description }) {
    this.element = createCardElement({ title, description });
    this.toLearnList = document.querySelector(".to-learn-stickies");
    this.understoodList = document.querySelector(".understood-stickies");
    this.render();
    this.addEventListeners();
  }

  render() {
    // add this.element to toLearnList
    this.toLearnList.appendChild(this.element);
  }

  addEventListeners() {
    const removeButton = this.element.firstElementChild.children[2];
    removeButton.addEventListener("click", () => {
      this.remove();
    });

    const priorityButton = this.element.firstElementChild.children[3];
    priorityButton.addEventListener("click", () => {
      this.moveToTop();
    });

    const understoodButton = this.element.firstElementChild.children[4];
    understoodButton.addEventListener("click", () => {
      this.moveToUnderstood();
    });
  }

  remove() {
    // remove this.element
    this.element.remove();
    //this.element.parentNode.removeChild(this.element);
    //this.toLearnList.removeChild(this.element)
  }

  moveToTop(){
    // inserting this.element before the first element
    this.toLearnList.insertBefore(this.element, this.toLearnList.firstElementChild)
  }

  moveToUnderstood() {
    this.understoodList.appendChild(this.element);
  }
}

export { Card };

// bonus challenge: 
// either remove the "remove" button from understood cards
// or, move them to the start of that list

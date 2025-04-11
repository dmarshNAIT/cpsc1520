import { createCardElement } from '../dom/card.js';

class Card {
    constructor({title, description}) {
        this.element = createCardElement({title, description});
        this.toLearnList = document.querySelector('.to-learn-stickies');
        this.understoodList = document.querySelector('.understood-stickies');
        this.render();
        this.addEventListeners();
    }

    // method to render the Card on the screen
    render() {
        this.toLearnList.appendChild(this.element);
    }
    // method to add event listeners to the Card
    addEventListeners() {
        const removeButton = this.element.querySelector('.btn-danger');
        removeButton.addEventListener('click', () => {
            this.element.remove();
        })

        const priorityButton = removeButton.nextElementSibling;
        priorityButton.addEventListener('click', () => {
            // insert this.element before the first child of toLearnList
            this.toLearnList.insertBefore(this.element, this.toLearnList.firstChild);
        });

        const understoodButton = priorityButton.nextElementSibling;
        understoodButton.addEventListener('click', () => {
            this.understoodList.appendChild(this.element);
        });

    }

    // helper methods

}

export { Card };
import {createCardElement} from '../dom/card.js';

class Card {
    constructor({title, description}) {
        this.element = createCardElement({title, description});
        this.toLearnList = document.querySelector('.to-learn-stickies');
        this.understoodList = document.querySelector('.understood-stickies');
        this.render();
        this.addEventListeners();
    }

    render() {
        this.toLearnList.appendChild(this.element);
    }

    addEventListeners(){
        const removeButton = this.element.children[0].children[2];
        // const removeButtonV2 = this.element.firstChild.children[2];
        removeButton.addEventListener('click', () => { this.remove() } );

        const priorityButton = this.element.children[0].children[3];
        priorityButton.addEventListener('click', ()=> { this.moveToTop() });

        const understoodButton = this.element.children[0].children[4];
        understoodButton.addEventListener('click', () => { this.moveToUnderstood() });
    }

    remove() {
        this.element.remove();
    }

    moveToTop(){
        this.toLearnList.insertBefore(this.element, this.toLearnList.firstElementChild);
    }

    moveToUnderstood(){
        this.understoodList.appendChild(this.element);
    }

}

// bonus challenge: fix the bug where completed tasks are moved to the start of the to-do list
// option 1: remove the remove button
// option 2: check which list it's in, then prioritize it within its current list

export { Card }
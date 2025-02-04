// this is our javascript file.

// intercept the form.
const form = document.querySelector('#budget-form');
// focus to the first element

// create an event listener on the form.
    // get the form element values for title, description and amount
    const title = document.querySelector('input[name=budget-title]').value;
    const description = form.elements['budget-description'].value;
    const amount = document.querySelector('#budget-item-amount').value;
    // prevent the form from being submitted.
    // get the form values.
    // add the item
    // update current budget total
    // reset the values
    // focus back at the title


const budgetList = document.querySelector('.current-budget');

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/

// add a updateTotal function


// add active class to list item on mouseover


// remove active class from list item on mouseout.
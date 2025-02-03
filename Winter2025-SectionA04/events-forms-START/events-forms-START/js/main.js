// this is our javascript file.

// intercept the form.
const form = document.querySelector('#budget-form');
// focus to the first element
// TODO:

// create an event listener on the form.
    // get the form element values for title, description and amount
    // prevent the form from being submitted.
    // get the form values.
    const title = document.querySelector('input[name=budget-title]');    // the value in the title
    const description = document.querySelector('#budget-item-description').value;
    const amount = document.querySelector('#budget-item-amount').value;
    // add the item
    // update current budget total
    // reset the values
    // focus back at the title

const budgetList = document.querySelector('.current-budget'); // this represents the UL element
// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const addBudgetItem = (title, amount, description) => {
    // create a HTML template to represent the new LI
    const li = `<li class="list-group-item list-group-item-action" aria-current="true">
        ${title} (${amount}) - ${description}
    </li>`;
    // add that the budgetList
    budgetList.innerHTML = budgetList.innerHTML + li;
};


// add a updateTotal function
// TODO: 

// add active class to list item on mouseover


// remove active class from list item on mouseout.
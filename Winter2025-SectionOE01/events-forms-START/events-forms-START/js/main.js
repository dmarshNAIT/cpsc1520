// this is our javascript file.

// intercept the form.
const form = document.querySelector('#budget-form');
// focus to the first element
document.querySelector('#budget-item').focus();

// create an event listener on the form.
form.addEventListener('submit', (event) => {
    // get the form element values for title, description and amount
    const title = document.querySelector('input[name=budget-title]').value;
    const description = form.elements['budget-description'].value;
    const amount = document.querySelector('#budget-item-amount').value;

    // prevent the form from being submitted.
    event.preventDefault();

    // add the item
    addBudgetItem(title, amount, description);

    // update current budget total
    updateTotal(amount);

    // reset the values
    form.reset();

    // focus back at the title
    document.querySelector('#budget-item').focus();
});

const budgetList = document.querySelector('.current-budget');

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const addBudgetItem = (title, amount, description) => {
    // create our list item
    const listItem = `<li class="list-group-item list-group-item-action" aria-current="true">
        ${title} (${amount}) - ${description}
    </li>`;
    // add the li to our budgetList
    budgetList.innerHTML = budgetList.innerHTML + listItem;
};

// add a updateTotal function
const updateTotal = (amount) => {
    const budgetTotal = document.querySelector('#budget-total');
    budgetTotal.innerText = parseFloat(budgetTotal.innerText) + Number(amount);
};

// add active class to list item on mouseover
budgetList.addEventListener('mouseover', (event) => {
    event.target.classList.add('active');
});

// remove active class from list item on mouseout.
budgetList.addEventListener('mouseout', (event) => {
    event.target.classList.remove('active');
});
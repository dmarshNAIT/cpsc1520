// this is our javascript file.

// intercept the form.
const form = document.querySelector('#budget-form');
// focus to the first element
document.querySelector('input[name=budget-title]').focus();

// create an event listener on the form.
form.addEventListener('submit', (event) => {
    // get the form element values for title, description and amount
    // prevent the form from being submitted.
    event.preventDefault();
    // get the form values.
    const title = document.querySelector('input[name=budget-title]').value;   
    const description = document.querySelector('#budget-item-description').value;
    const amount = document.querySelector('#budget-item-amount').value;

    // add the item
    addBudgetItem(title, amount, description);
    // update current budget total
    updateTotal(amount);
    // reset the values
    form.reset();
    // focus back at the title
    document.querySelector('input[name=budget-title]').focus();
});

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
const updateTotal = (amount) => {
    // get the total element
    const totalElement = document.querySelector('#budget-total');

    // add the new amount to the total & update the HTML
    totalElement.innerText =  parseInt(totalElement.innerText) + parseInt(amount);
};

// add active class to list item on mouseover
budgetList.addEventListener('mouseover', (event) => {
    event.target.classList.add('active');
});

// remove active class from list item on mouseout.
budgetList.addEventListener('mouseout', (event) => {
    event.target.classList.remove('active');
});
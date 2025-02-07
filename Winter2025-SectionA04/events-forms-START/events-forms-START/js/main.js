// this is our javascript file.

// intercept the form.
const form = document.querySelector('#budget-form');
// create references to the form elements:
const titleElement = document.querySelector('input[name=budget-title]');
const descriptionElement = document.querySelector('#budget-item-description');
const amountElement = document.querySelector('#budget-item-amount');

// focus to the first element
titleElement.focus();

// create an event listener on the form.
form.addEventListener('submit', (event) => {
    // prevent the form from being submitted.
    event.preventDefault();
    // get the form values.
    const title = titleElement.value;
    const description = descriptionElement.value;
    const amount = amountElement.value;

    let isFormValid = true;

    // VALIDATE EACH FORM ELEMENT
    // validate title
    if (isTextEmpty(title)) {    // title is empty
        // it's invalid! mark it as invalid, mark form as invalid
        titleElement.classList.add('is-invalid');
        isFormValid = false;
    } else {   // otherwise, it's valid! remove the invalid marker
        titleElement.classList.remove('is-invalid');
    }

    // validate description
    if (isTextEmpty(description)) {    // description is empty
        // it's invalid! mark it as invalid, mark form as invalid
        descriptionElement.classList.add('is-invalid');
        isFormValid = false;
    } else {   // otherwise, it's valid! remove the invalid marker
        descriptionElement.classList.remove('is-invalid');
    }

    // validate amount
    // check if amount is greater than zero
    // if so: valid! remove the invalid marker
    // otherwise: invalid! mark it as invalid, mark form as invalid
    if (isGreaterThanZero(amount)) {
        amountElement.classList.remove('is-invalid');
    }
    else {
        amountElement.classList.add('is-invalid');
        isFormValid = false;
    }

    // IF THE FORM IS VALID:
    if (isFormValid) {
        // add the item
        addBudgetItem(title, amount, description);
        // update current budget total
        updateTotal(amount);
        // reset the values
        form.reset();
        // focus back at the title
        titleElement.focus();
    }
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
    totalElement.innerText = parseInt(totalElement.innerText) + parseInt(amount);
};

// add active class to list item on mouseover
budgetList.addEventListener('mouseover', (event) => {
    event.target.classList.add('active');
});

// remove active class from list item on mouseout.
budgetList.addEventListener('mouseout', (event) => {
    event.target.classList.remove('active');
});

/* VALIDATOR FUNCTIONS */
const isTextEmpty = (value) => {
    return (value.length == 0);
}

const isGreaterThanZero = (value) => {
    return (parseInt(value) > 0);
};
// this is our javascript file.
console.log('linked!');

// intercept the form.
const form = document.querySelector('form');

// focus to the first element
form.elements[0].focus();

// create an event listener on the form.
form.addEventListener('submit', (event) => {
  // get the form element values for title, description and amount
  // prevent the form from being submitted.
  event.preventDefault();

  const titleElement = form.elements['budget-title'];
  const amountElement = document.querySelector('#budget-item-amount');
  const descriptionElement = document.querySelector('#budget-item-description');
  // get the form values.
  //const title = document.querySelector('#budget-item');
  //const title = document.querySelector('input[name=budget-title]')
  const title = titleElement.value;
  const amount = amountElement.value;
  const description = descriptionElement.value;

  let isFormValid = true;

  // TODO: validate

  if (isFormValid) {
    // add the item
    addBudgetItem(title, amount, description);
    // update current budget total
    updateTotal(amount);
    // reset the values
    form.reset();
    // focus back at the title
    form[0].focus();
  }
});

// create a variable to represent the budget list
const budgetList = document.querySelector('.current-budget');

// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const addBudgetItem = (title, amount, description) => {
  // create the new list item:
  const listItem = `<li class="list-group-item list-group-item-action" aria-current="true">
        ${title} (${amount}) - ${description}
    </li>`;
  // and add it to the end of the list
  budgetList.innerHTML = budgetList.innerHTML + listItem;
};

// add a updateTotal function
// create a function with amount as a parameter
const updateTotal = (amount) => {
  // add the amount to the budget total
  const budgetTotal = document.querySelector('#budget-total');
  budgetTotal.innerText = parseInt(budgetTotal.innerText) + parseInt(amount);
};

// add active class to list item on mouseover
budgetList.addEventListener('mouseover', (event) => {
  event.target.classList.add('active');
});
// a reference to the list e.g. list
// list.classList.add('class-name')
// list.classList.remove('class-name')

// remove active class from list item on mouseout.
budgetList.addEventListener('mouseout', (event) => {
  event.target.classList.remove('active');
});

const isEmpty = (element) => {
  return element.value.length === 0;
  // other approaches include:
  // return element.value == ''
  // return !Boolean(element.value)
};

const inRangeInclusive = (element, min, max) => {
  return element.value >= min && element.value <= max;
};

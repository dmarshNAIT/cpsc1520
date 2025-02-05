// we're going to use bootstrap validation
// https://getbootstrap.com/docs/5.0/forms/validation/
/*
  essentially what we're going to do here.
  - check if each form element's value is valid.
  - essentially we're going to pass the values to validator functions
      - these functions are going to return true or false values
        true if valid, false 
  - if it's invalid we're going to add the class "is-invalid"
      - this is going to show the divs with the "invalid-feedback"
        which has the 
  - also we're going to return early from the event handler if it's not valid
      - this is so we don't create the budget items.
*/

(function (){

// intercept the form and req'd elements
let budgetFormElement = document.querySelector('#budget-form');
let budgetListElement = document.querySelector('.current-budget');
let budgetTotalElement = document.querySelector('#budget-total');
// create a variable to hold the running budget total
let runningBudgetTotal = 0;

// focus to the first element on page load
budgetFormElement.elements['budget-title'].focus();

// add a submit listener
budgetFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // get the form element values (e.g. title, desc, and amount)
  let titleValue = budgetFormElement.elements['budget-title'].value; 
  let descriptionValue = budgetFormElement.elements['budget-description'].value;
  let amountValue = parseFloat(budgetFormElement.elements['amount'].value);

  // call your add line item function
  addLineItem(titleValue, descriptionValue, amountValue);
  // clear out the form fields
  // method 1
  // budgetFormElement.elements['budget-title'].value = '' 
  // budgetFormElement.elements['budget-description'].value = '';
  // budgetFormElement.elements['amount'].value = '';

  // method 2
  budgetFormElement.reset();

  // re-focus on the title
  budgetFormElement.elements['budget-title'].focus();

  // call your update budget total function
  addToTotal(amountValue);

});
// function to add a budget item 
// e.g.
// <li class="list-group-item list-group-item-action">
// TITLE AMOUNT - DESCRIPTION</li>
function addLineItem(title, description, amount) {
  let newItem = `<li class="list-group-item list-group-item-action">
                   ${title} ${moneyFormat(amount)} - ${description}
                 </li>`;
  budgetListElement.innerHTML += newItem;
}

// function to add a updateTotal function
function addToTotal(amount) {
  runningBudgetTotal += amount;
  budgetTotalElement.innerText = moneyFormat(runningBudgetTotal);
}

// function for general currency formatter
function moneyFormat(amount) {
  let formatter = new Intl.NumberFormat('en-CA', { 
    style: 'currency', currency: 'CAD'
  });
  
  return formatter.format(amount);
}

})();

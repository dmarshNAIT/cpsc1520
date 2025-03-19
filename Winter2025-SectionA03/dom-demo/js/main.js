// create a variable to represent the first div
// this is the ONLY time in this example where we will use querySelector or any of our old tricks
const div1 = document.querySelector('div:first-of-type');

// add a new beverage to the list
const p5 = document.createElement('p');
const eggnog = document.createTextNode('Eggnog');
p5.appendChild(eggnog);
div1.appendChild(p5);

//  add another beverge, BEFORE bubble tea
const p6 = document.createElement('p');
const fanta = document.createTextNode('Fanta');
p6.appendChild(fanta);
const bubbleTea = div1.children[1];
div1.insertBefore(p6, bubbleTea);

// let's use setAttribute to add an id to Dr Pepper, but using eggnog as our starting point
eggnog
    .parentElement
    .parentElement
    .nextElementSibling
    .firstElementChild
    .setAttribute('id', 'we-did-it');

// OR the longest route possible, hitting EVERY element
eggnog
    .parentElement
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .parentElement
    .parentElement
    .lastElementChild
    .firstElementChild
    .setAttribute('id', 'a-very-long-way-to-go');
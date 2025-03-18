console.log('linked!');

// CHALLENGE: After this next statement, we are not going to use querySelector, getElementByID, or any of our old DOM tricks.
const div1 = document.querySelector('div:first-of-type');

// add a new topping to the first div:
const p5 = document.createElement('p'); 
const extraPeppers = document.createTextNode('extra peppers');
p5.appendChild(extraPeppers);
div1.appendChild(p5);

// add a topping just after Anchovies (before Bacon)
const p6 = document.createElement('p'); 
const feta = document.createTextNode('Feta');
p6.appendChild(feta);
const baconElement = div1.children[1];
div1.insertBefore(p6, baconElement); // insert p6 before baconElement

// TODO: add an ID to "diced meat"
// without creating any new variables
// starting with "extra peppers" variable p5
p5
.parentNode
.nextElementSibling
.children[0]
.setAttribute('id', 'pizza-topping');
// BONUS CHALLENGE: can we hit every element exactly once?
p5
.previousElementSibling
.previousElementSibling
.previousElementSibling
.previousElementSibling
.parentNode
.parentNode
.children[1]
.children[0]
.setAttribute('id', 'long-route');
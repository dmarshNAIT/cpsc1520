console.log('hello, I am connected');

// create variables
const div1 = document.querySelector('div:first-of-type');
const div2 = div1.nextElementSibling;

// create a new paragraph
let pGal = document.createElement('p');
// give it some text
let eagle = document.createTextNode('eagle');
pGal.appendChild(eagle);
// add that new paragraph into our first div
 div1.appendChild(pGal);

 // let's create yet another animal:
let p6 = document.createElement('p');
let newAnimal = document.createTextNode('fainting goat');
p6.appendChild(newAnimal);

// we want to add this newest animal in front of beluga,
// so let's create a variable to reference beluga:
let beluga = div1.children[1];

// now, let's add the fainting goat before beluga whale
div1.insertBefore(p6, beluga);

// let's add an ID to one of our animals
// without using div2 element OR querySelector
let dingo = pGal
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .parentNode
    .parentNode
    .children[1]
    .children[0];
    // this is intentionally silly: we went thru EVERY element to get here
console.log(dingo)
// dingo.setAttribute('id', 'thief');
// console.log(dingo)
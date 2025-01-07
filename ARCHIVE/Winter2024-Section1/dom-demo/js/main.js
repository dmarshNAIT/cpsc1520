// create some variables to refer to each div
const div1 = document.querySelector('div:first-of-type');
console.log(div1);
const div2 = div1.nextElementSibling;
console.log(div2);

// create some new nodes
const p5 = document.createElement('p');

// create text to go in those elements
let p5text = document.createTextNode('Elementals');

// add the text to the element
p5.appendChild(p5text);

// add the element to the page
div1.appendChild(p5);

// let's create another element, with text, and add it before Cats
let p6 = document.createElement('p');
let p6text = document.createTextNode('Fight Club');

p6.appendChild(p6text);
let catsElement = p5.previousElementSibling;
div1.insertBefore(p6, catsElement);

// remove element p4
// you are not allowed to use querySelector
// you are not allowed to use div1, div2, or p6 variables
// p5.parentNode.nextElementSibling.firstElementChild.remove();

// extra challenge: go thru every element exactly 1 time
// let p4 = p5
//     .previousElementSibling
//     .previousElementSibling
//     .previousElementSibling
//     .previousElementSibling
//     .parentNode
//     .parentNode
//     .children[1]
//     .children[0];
// console.log(p4);
// p4.remove();


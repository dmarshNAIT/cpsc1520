console.log('linked!');

// create a variable to represent div1
const div1 = document.querySelector('div:first-child');

// without using querySelector or getElementById or any of our earlier tricks, let's access each element on the page, and add some new ones!

// let's access the sibling of our div:
const div2 = div1.nextElementSibling;

// let's add another p, as a child of div 1
// that paragraph will contain the text 'Elephant'
let p5 = document.createElement('p');
let text5 = document.createTextNode('Elephant');
p5.appendChild(text5);
div1.appendChild(p5);

// create another element in front of an existing element
// add an animal starting with F in front of Bebop
let p6 = document.createElement('p');
let text6 = document.createTextNode('Frog');
p6.appendChild(text6);
let p2  = div1.children[1]; // bebop is a child of div1
// or
p2 = p5.previousElementSibling.previousElementSibling; // bebop is a sibling of p5
// insert p6 before "bebop"
div1.insertBefore(p6, p2); // insert p6 before p2

// challenge: starting with the elephant p, add an ID to Donatello's paragraph
p5.parentElement.nextElementSibling.children[0].setAttribute('id', 'best-turtle');
// let's take the longest possible route, hitting every HTML element exactly once
p5
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .previousElementSibling
    .parentElement
    .parentElement
    .children[1]
    .children[0]
    .setAttribute('id', 'purple');
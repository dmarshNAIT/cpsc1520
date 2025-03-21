console.log('linked!');

// create a variable to represent div1
const div1 = document.querySelector('div:first-child');

// without using querySelector or getElementById or any of our earlier tricks, let's access each element on the page, and add some new ones!

// let's access the sibling of our div:
const div2 = div1.nextElementSibling;

// let's add another p, as a child of div 1
// that paragraph will contain the text 'Elephant'
let p = document.createElement('p');
let text = document.createTextNode('Elephant');
p.appendChild(text);
div1.appendChild(p);

// create another element in front of an existing element
// add an animal starting with F in front of Bebop



// challenge: starting with ____, add an ID to ____
/*
Using Classes and Objects.

In this example we're going to create some balloons that when we click on them
they're going to get removed from the screen.

1. import bootstrap and our css
2. create the balloon class in the balloon.js folder
3. Use this class and initialize a few. 
4. write an event listener that removes the balloons from the page.


*/


// import our bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/main.css'

import { Balloon } from './utils/balloon.js';

for(let i = 0; i < 50; i++) {
    const newBalloon = new Balloon();
    document.querySelector('.balloons').appendChild(newBalloon.element);
}

document.addEventListener('click', (event) => {
   if (event.target.classList.contains('single-balloon')) 
    event.target.remove();
});
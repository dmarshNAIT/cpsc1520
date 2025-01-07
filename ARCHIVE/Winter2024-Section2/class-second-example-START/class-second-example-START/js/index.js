import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css'
import {Balloon} from './utils/balloon.js';

// create a bunch of 15 balloons
for(let i = 0; i < 15; i++) {
    let newBalloon = new Balloon();
    document.querySelector('.balloons').appendChild(newBalloon.element);
}

// add an event listener to the page, listening for clicks --> remove that balloon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('single-balloon')) {
        event.target.remove();
    }
});

// BONUS CHALLENGE:
// add the stopwatch that starts counting when the balloons are rendered
// DOUBLE CHALLENGE: keep the top score (using fetch?)
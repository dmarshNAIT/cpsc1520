// Timer Fundamentals
// 1. select all of the button elements and the lap elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const lapButton = document.querySelector('.lap');
const lapsElement = document.querySelector('.all-laps');

// 2. add an event listener for the start button
startButton.addEventListener('click', () => {
    // if the timer isn't already running, start it:
    if(!isStopWatchRunning) {
        startTimer();
    }
});

// 3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
let currentTime = 0;
let isStopWatchRunning = false;
let timerInterval;

// 4. create a function named "startTimer" to start the interval
//     - set the isStopWatchRunning to true
//     - use setInterval to set the "timerInterval" variable
//         - set the "time interval" or "delay" to 10ms
//     - in the setInterval callback function, increment the time
function startTimer() {
    isStopWatchRunning = true;
    const TIME_INTERVAL = 10; // 10ms

    // call setInterval
    timerInterval = setInterval( () => {
        currentTime++;
        setTimerValue();
    }, TIME_INTERVAL);
}

// 5. create function named setTimerValue that will display the time on the page
//     - call this function in the setInterval callback from the previous step
//     - make it more readable (i.e. seconds:hundredths of seconds)
function setTimerValue() {
    document.querySelector('.timer-value').innerText = getPrettyTime(currentTime); 
}

function getPrettyTime (currentTime) {
    let numberOfSeconds = Math.floor(currentTime / 100).toString();
    let hundredths = (currentTime % 100).toString().padStart(2, '0');

    return numberOfSeconds + ':' + hundredths;
}

// 6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
//     - observe the page how the timer stops
//     - if you click start, the timer continues
stopButton.addEventListener('click', () => {
    // if the timer is running:
    if(isStopWatchRunning) {
        isStopWatchRunning = false;
        clearInterval(timerInterval);
    }
    else {
        // if it's not running:
        // reset the relevant variables
        currentTime = 0;
        lapNumber = 1;
        lastLapTime = 0;
        // clear out the timer
        setTimerValue();
        // clear out any laps
        // option 1: innerHTML
        // lapsElement.innerHTML = '';
        // option 2: iterate thru the ul children, remove them
        while(lapsElement.hasChildNodes()) {
            lapsElement.children[0].remove();
        }
    }
});

let lapNumber = 1;
let lastLapTime = 0;
// 7. create a function to add new lap
//     - get the lap time which is the current lap time minus the last lap time
//     - display it on the page with the following html (in all laps section)
//          <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
//     - increase the currentLap
//     - add the lastLapTime
function addLap() {
    let currentLapTime = currentTime - lastLapTime;
    
    // lapsElement.innerHTML += 
    //     `<li class="list-group-item">
    //         Lap ${lapNumber}: ${getPrettyTime(currentLapTime)}
    //     </li>`;

    // create a list item element
    const liElement = document.createElement('li');
    // add a class to that list-item
    liElement.classList.add('list-group-item');
    // create a text node
    const liText = document
    .createTextNode(`Lap ${lapNumber}: ${getPrettyTime(currentLapTime)}`);
    // insert the text node into that new li
    liElement.appendChild(liText);
    // append that new li to our lapsElement
    lapsElement.appendChild(liElement);
    
    lapNumber++;
    lastLapTime = currentTime;
}

// 8. in the add lap event listener, call the function above
lapButton.addEventListener('click', () => {
    addLap();
});

// BONUS CHALLENGE: add a yellow RESET button
// OR: double-click stop to reset timer (e.g. using a counter variable)
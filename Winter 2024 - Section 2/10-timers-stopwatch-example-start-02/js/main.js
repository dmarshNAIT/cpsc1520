// Timer Fundamentals
// 1. select all of the button elements and the lap elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const lapButton = document.querySelector('.lap');
const lapsElement = document.querySelector('.all-laps');

// 2. add an event listener for the start button
startButton.addEventListener('click', () => {
    console.log('entering start button event handler....');
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

        if(!isStopWatchRunning) {
            clearInterval(timerInterval);
        }
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
    isStopWatchRunning = false;
});

let lapNumber = 1;
let lastLapTime = 0;
// 7. create a function to add new lap
//     - get the lap time which is the current lap time minus the last lap time
//     - display it on the page with the following html (in all laps section)
//          <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
//     - increase the currentLap
//     - add the lastLapTime
lapButton.addEventListener('click', () => {
    let currentLapTime = currentTime - lastLapTime;

    lapsElement.innerHTML += 
        `<li class="list-group-item">
            Lap ${lapNumber}: ${getPrettyTime(currentLapTime)}
        </li>`;

    lapNumber++;
    lastLapTime = currentTime;
});

// 8. in the add lap event listener, call the function above


// BONUS CHALLENGE: add a yellow RESET button
// OR: double-click stop to reset timer (e.g. using a counter variable)
// Timer Fundamentals
// 1. select all of the button elements and the lap elements
const timerElement = document.querySelector('.timer-value');
const stopButton = document.querySelector('.stop');
const startButton = document.querySelector('.start');
const lapButton = document.querySelector('.lap');
const lapsElement = document.querySelector('.all-laps');

// 2. add an event listener for the start button
startButton.addEventListener('click', () => {
    console.log('entering start button event handler....');
    if(!isStopWatchRunning) {
        startTimer();
    }
});

// 3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
let currentTime = 0; // hundredths of a second AKA centiseconds
let isStopWatchRunning = false;
let timerInterval;

// 4. create a function named "startTimer" to start the interval
//     - set the isStopWatchRunning to true
//     - use setInterval to set the "timerInterval" variable
//         - set the "time interval" or "delay" to 10ms
//     - in the setInterval callback function, increment the time
function startTimer() {
    isStopWatchRunning = true;
    const DELAY = 10;

    timerInterval = setInterval( () => {
        currentTime++;
        setTimerValue();
    }, DELAY);

}

// 5. create function named setTimerValue that will display the time on the page
//     - call this function in the setInterval callback from the previous step
//     - make it more readable (i.e. seconds:hundredths of seconds)
function setTimerValue() {
    timerElement.innerText = getPrettyTimeV2(currentTime);
}

function getPrettyTime(time) {
    let numberSeconds = Math.floor(time / 100);
    let hundredths = time % 100;
    hundredths = hundredths < 10 ? '0' + hundredths : hundredths;

    return numberSeconds + ':' + hundredths;
}

function getPrettyTimeV2(time) {
    let numberSeconds = (time/100).toFixed(2);
    return numberSeconds.toString().replace('.', ':');
}

// 6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
//     - observe the page how the timer stops
//     - if you click start, the timer continues
stopButton.addEventListener('click', () => {
    isStopWatchRunning = false;
    clearInterval(timerInterval);
});

let currentLapNum = 1;
let lastLapTime = 0;
// 7. create a function to add new lap
//     - get the lap time which is the current lap time minus the last lap time
//     - display it on the page with the following html (in all laps section)
//          <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
//     - increase the currentLap
//     - add the lastLapTime
function addLap() {
    let currentLapTime = currentTime - lastLapTime;

    lapsElement.innerHTML += 
        `<li class="list-group-item">
            Lap ${currentLapNum}: ${getPrettyTime(currentLapTime)}
        </li>`;

    currentLapNum++;
    lastLapTime = currentTime;
}

// 8. in the add lap event listener, call the function above
lapButton.addEventListener('click', () => {
    addLap();
});

// CHALLENGE: reset the timer when we double-click the STOP button
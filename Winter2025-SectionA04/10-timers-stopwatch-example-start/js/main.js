// Timer Fundamentals
// 1. select all of the button elements and the lap elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const lapButton = document.querySelector('.lap');
const laps = document.querySelector('.all-laps');

// 2. add an event listener for the start button
startButton.addEventListener('click', () => {
    if (!isStopWatchRunning) {
        startTimer();
    }
});

// 3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
let currentTime = 0; // this will be the time in hundredths of a second
let isStopWatchRunning = false;
let timerInterval; // this is our timer

// 4. create a function named "startTimer" to start the interval
//     - set the isStopWatchRunning to true
//     - use setInterval to set the "timerInterval" variable
//         - set the "time interval" or "delay" to 10ms
//     - in the setInterval callback function, increment the time
const startTimer = () => {
    isStopWatchRunning = true;

    timerInterval = setInterval(() => {
        // every 10 ms, we want to update the time and then show that on the page:
        currentTime++;
        setTimerValue();
    }, 10); // every 10ms, our page will update
}

// 5. create function named setTimerValue that will display the time on the page
//     - call this function in the setInterval callback from the previous step
//     - make it more readable (i.e. seconds:hundredths of seconds)
const setTimerValue = () => {
    document.querySelector('.timer-value').innerText = getPrettyTime(currentTime);
}

const getPrettyTime = (centiseconds) => {
    const seconds = Math.floor(centiseconds / 100);
    let hundredths = centiseconds % 100;

    if (hundredths < 10) hundredths = '0' + hundredths;

    return seconds + ':' + hundredths;
}

// 6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
//     - observe the page how the timer stops
//     - if you click start, the timer continues
stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isStopWatchRunning = false;
});

// 7. create a function to add new lap
//     - get the lap time which is the current lap time minus the last lap time
//     - display it on the page with the following html (in all laps section)
//          <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
//     - increase the currentLap
//     - add the lastLapTime


// 8. in the add lap event listener, call the function above
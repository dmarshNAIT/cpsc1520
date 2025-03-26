// Timer Fundamentals
// 1. select all of the button elements and the lap elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const lapButton = document.querySelector('.lap');
const lapList = document.querySelector('.all-laps');

// 2. add an event listener for the start button
startButton.addEventListener('click', () => {
  if (!isStopWatchRunning) startTimer();
});

// 3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
let currentTime = 0; // time in hundredths of a second (centiseconds)
// 1 hundredth of a second = 10 milliseconds
let isStopWatchRunning = false;
let timerInterval; // this will be our timer object

// 4. create a function named "startTimer" to start the interval
//     - set the isStopWatchRunning to true
//     - use setInterval to set the "timerInterval" variable
//         - set the "time interval" or "delay" to 10ms
//     - in the setInterval callback function, increment the time
const startTimer = () => {
  const INTERVAL_MS = 10;
  isStopWatchRunning = true;

  timerInterval = setInterval(() => {
    currentTime++;
    setTimerValue();
  }, INTERVAL_MS); // every 10 ms, this will run
};

// 5. create function named setTimerValue that will display the time on the page
//     - call this function in the setInterval callback from the previous step
//     - make it more readable (i.e. seconds:hundredths of seconds)
const setTimerValue = () => {
    document.querySelector('.timer-value').textContent = getPrettyTime(currentTime);
}

const getPrettyTime = (centiseconds) => {
    // Math.Floor rounds down
    const numberOfSeconds = Math.floor(centiseconds / 100);
    let hundredths = centiseconds % 100;
    if (hundredths < 10) {
        // make sure the hundredths value is always exactly 2 digits
        hundredths = '0' + hundredths;
    }

    return numberOfSeconds + ':' + hundredths;
}

// 6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
//     - observe the page how the timer stops
//     - if you click start, the timer continues
stopButton.addEventListener('click', () => {
    if (isStopWatchRunning) {
        clearInterval(timerInterval);
        isStopWatchRunning = false;
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
const addNewLap = () => {
    const currentLapTime = currentTime - lastLapTime;

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `Lap ${lapNumber}: ${getPrettyTime(currentLapTime)}`;
    lapList.appendChild(li);

    lapNumber++;
    lastLapTime = currentTime;
}

// 8. in the add lap event listener, call the function above
lapButton.addEventListener('click', () => {
    addNewLap();
});
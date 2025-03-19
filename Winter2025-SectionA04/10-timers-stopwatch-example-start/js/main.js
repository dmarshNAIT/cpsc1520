/*
Timer Fundamentals
1. select all of the button elements and the lap elements
2. add an event listener for the start button
3. create variables for the currentTime, an isStopWatchRunning and the timerInterval
4. create a function named "startTimer" to start the interval
    - set the isStopWatchRunning to true
    - use setInterval to set the "timerInterval" variable
        - set the "time interval" or "delay" to 10ms
    - in the setInterval callback function, increment the time
5. create function named setTimerValue that will display the time on the page
    - call this function in the setInterval callback from the previous step
    - make it more readable (i.e. seconds:hundredths of seconds)
6. in the stop button listener, set the isStopWatchRunning to false and clear the interval
    - observe the page how the timer stops
    - if you click start, the timer continues
7. create a function to add new lap
    - get the lap time which is the current lap time minus the last lap time
    - display it on the page with the following html (in all laps section)
         <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
    - increase the currentLap
    - add the lastLapTime
8. in the add lap event listener, call the function above
*/
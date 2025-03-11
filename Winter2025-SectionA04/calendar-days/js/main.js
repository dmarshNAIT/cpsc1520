// array of day names
let days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

// variable for the table, which includes a row for day names
let cal = '<table border="1"><tr>';

for (let idx = 0; idx < days.length; idx += 1) {
    // add each day name to the row
    cal += '<th>' + days[idx] + '</th>';
}

// close the table; ready for display
cal += '</tr></table>';

document.querySelector('.calendar').innerHTML = cal;



// TODO part 1: create a function called getCalendar that takes 2 params: year & month
// create variables to represent the first & last days of the month

// create the heading

// open the table tag
// open the row tag

// print out the names of the days as <th> elements

// end that row & start another

// now, loop through the days of the month, from 0 to the last day.
// + blank elements for "empty" days e.g. if the month doesn't start on Sunday
// + a <td> for the current day
// close a row if needed
// start a new row if needed

 // return the completed calendar




// TODO part 2:  call getCalendar with today's date & use it to update the webpage
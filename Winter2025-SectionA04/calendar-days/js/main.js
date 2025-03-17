// array of day names
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// TODO part 1: create a function called getCalendar that takes 2 params: year & month

// create variables to represent the first & last days of the month
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth(); // month starts at 0 for January
let firstDay = new Date(year, month, 1);
let lastDay = new Date(year, month + 1, 0); //underflow

// create the heading

// open the table tag
// open the row tag
// variable for the table, which includes a row for day names
let cal = '<table border="1"><tr>';

// print out the names of the days as <th> elements
for (let idx = 0; idx < days.length; idx += 1) {
    // add each day name to the row
    cal += '<th>' + days[idx] + '</th>';
}

// end that row & start another
cal += '</tr><tr>';

// now, loop through the days of the month, from 0 to the last day.
let blanks = 0; // keep track of how many blank days we've made
for (let counter = 0; counter < lastDay.getDate(); counter++) {
    // + blank elements for "empty" days e.g. if the month doesn't start on Sunday
    // if the month doesn't start on Sunday:
    if (counter != firstDay.getDay() && blanks == 0) {
        // use getDay() to figure out how many blank cells to create
        for (blanks = 0; blanks < firstDay.getDay(); blanks++) {
            cal += '<td></td>'
        }
    }

    // + a <td> for the current day
    cal += '<td>' + (counter + 1) + '</td>';

    // close a row if needed
    if ((blanks + counter + 1) % 7 == 0) {
        cal += '</tr>';
        // start a new row if needed
        if (counter <= lastDay.getDate()) {
            cal += '<tr>';
        }
    }

}

// close the table; ready for display
cal += '</table>';

document.querySelector('.calendar').innerHTML = cal;

// return the completed calendar

// TODO part 2:  call getCalendar with today's date & use it to update the webpage

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

// TODO: create variables to represent the year & current month
// TODO: create variables to represent the first and last days of the month

// variable for the table, which includes a row for day names
let cal = '<table border="1"><tr>';

for (let idx = 0; idx < days.length; idx += 1) {
    // add each day name to the row
    cal += '<th>' + days[idx] + '</th>';
}

// close the table; ready for display
cal += '</tr>';

// TODO: start a new row

// TODO: loop through all the days in the month and add them as td

// TODO: add blanks if the month doesn't start on Sunday

// TODO: add new rows where needed

cal += '</table>';

document.querySelector('.calendar').innerHTML = cal;
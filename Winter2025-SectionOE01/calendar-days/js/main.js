// array of day names
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// create variables to represent the year & current month
const year = 2025; // TODO: make this automatic
const month = 2; // TODO: make this automatic
// create variables to represent the first and last days of the month
const firstDay = new Date(year, month, 1);
const lastDay = new Date(year, month + 1, 0);

// variable for the table, which includes a row for day names
let cal = '<table border="1"><tr>';

for (let idx = 0; idx < days.length; idx += 1) {
  // add each day name to the row
  cal += '<th>' + days[idx] + '</th>';
}

// end the header row and start another:
cal += '</tr><tr>';

// add blanks if the month doesn't start on Sunday
for (let blanks = 0; blanks < firstDay.getDay(); blanks++) {
  cal += '<td></td>';
}

for (let counter = 0; counter < lastDay.getDate(); counter++) {
  cal += '<td>' + (counter + 1) + '</td>';

  // TODO: add new rows where needed
  if () { // it's the end of the week
    // close the current tr

    // if it's NOT the end of the month
    // start a new tr
  }
}

cal += '</table>';

document.querySelector('.calendar').innerHTML = cal;

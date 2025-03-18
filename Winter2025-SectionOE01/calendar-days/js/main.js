// array of day names
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// create variables to represent the year & current month
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
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
let blanks;
for (blanks = 0; blanks < firstDay.getDay(); blanks++) {
  cal += '<td></td>';
}

for (let counter = 0; counter < lastDay.getDate(); counter++) {
  cal += '<td>' + (counter + 1) + '</td>';

  // it's the end of the week
  if ((blanks + counter + 1) % 7 === 0) {
    // close the current tr
    cal += '</tr>';
    // if it's NOT the end of the month
    if (counter <= lastDay.getDate())
      // start a new tr
      cal += '<tr>';
  }
}

cal += '</table>';

document.querySelector('.calendar').innerHTML = cal;

// DECLARE OUR VARIABLES
const currentDay = moment();

// saveBtn event
$('.saveBtn').on('click', handleSchedule);

// Notes Object
let savedNotes = {
    schedule9am: $('#hour9').value,
    schedule10am: $('#hour10').value,
    schedule11am: $('#hour11').value,
    schedule12pm: $('#hour12').value,
    schedule1pm: $('#hour13').value,
    schedule2pm: $('#hour14').value,
    schedule3pm: $('#hour15').value,
    schedule4pm: $('#hour16').value,
    schedule5pm: $('#hour17').value,
}

// localStorage
const savedSchedule = JSON.parse(localStorage.getItem('savedSchedule')) || [];
savedSchedule.push(savedNotes)

// WHEN I open the planner the current day is displayed at the top of the calendar
$('#currentDay').text(currentDay.format('dddd, MMMM do'));

console.log(parseInt(currentDay.format('H')))
console.log($('textarea').data('time'))

for (let timeIndex = 9; timeIndex <= 17; timeIndex++) {
    const currentTime = $(`#hour${timeIndex}`).data('time');

    if (parseInt(currentDay.format('H')) > currentTime) {
        $(`#hour${timeIndex}`).addClass('past')
    }
    else if (parseInt(currentDay.format('H')) == currentTime) {
        $(`#hour${timeIndex}`).addClass('present')
    }
    else if (parseInt(currentDay.format('H')) < currentTime) {
        $(`#hour${timeIndex}`).addClass('future')
    }
}

// WHEN I click the save button for that timeblock (event made on line 5).
function handleSchedule() {

}

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
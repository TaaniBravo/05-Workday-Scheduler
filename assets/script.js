// DECLARE OUR VARIABLES
let timeIndex = 0;

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

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
const currentDay = moment();
$('#currentDay').text(currentDay.format('dddd, MMMM do'));
console.log(parseInt(currentDay.format('H')))

$('textarea').each(function() {
    if (parseInt(currentDay.format('H')) > $('textarea').data('time') ) {
        $('textarea').addClass('past')
    }
    else if (parseInt(currentDay.format('H')) == $('textarea').data('time') ) {
        $('textarea').addClass('present')
    }
    else if (parseInt(currentDay.format('H')) < $('textarea').data('time') ) {
        $('textarea').addClass('future')
    }
})

// console.log(parseInt(currentDay.format('H')))

// WHEN I click the save button for that timeblock
function handleSchedule() {

}

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
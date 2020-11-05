// DECLARE OUR VARIABLES
const currentDay = moment();

// saveBtn event
$('.saveBtn').on('click', (e) => {
    savedSchedule.push($(e.target).siblings('textarea').val())
    console.log(savedSchedule)
});

// // Notes Object
// let savedNotes = {
//     schedule9am: $('#hour9').val(),
//     schedule10am: $('#hour10').val(),
//     schedule11am: $('#hour11').val(),
//     schedule12pm: $('#hour12').val(),
//     schedule1pm: $('#hour13').val(),
//     schedule2pm: $('#hour14').val(),
//     schedule3pm: $('#hour15').val(),
//     schedule4pm: $('#hour16').val(),
//     schedule5pm: $('#hour17').val(),
// }

// localStorage
const savedSchedule = JSON.parse(localStorage.getItem('savedSchedule')) || [];

// WHEN I open the planner the current day is displayed at the top of the calendar
$('#currentDay').text(currentDay.format('dddd, MMMM do'));

// FOR each hour (military time) in the workday we are going to check if it matches the number in our textarea IDs.
for (let timeIndex = 9; timeIndex <= 17; timeIndex++) {
    // Our const currentTime is equal to the id 'hour' with the matching with the number of timeIndex.
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
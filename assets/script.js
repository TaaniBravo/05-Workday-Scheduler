// DECLARE OUR VARIABLES
const currentDay = moment();

// Empty our textareas so that there are no weird spaces from the page loading.
$('textarea').empty()

// saveBtn event
$('.saveBtn').on('click', (e) => {
    let hourClicked = $(e.target).siblings('textarea').data('time')
    let notesSaved = $(e.target).siblings('textarea').val()
    
    localStorage.setItem('scheduled-hour-' + hourClicked, notesSaved)
    console.log(localStorage)
});

// localStorage
for (let notesIndex = 9; notesIndex <=17; notesIndex++) {
const savedSchedule = JSON.stringify(localStorage.getItem('scheduled-hour-' + notesIndex));
    console.log(savedSchedule)
    if(savedSchedule === null) {
        $('textarea').empty()
    }
}
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

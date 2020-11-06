// DECLARE OUR VARIABLES
const currentDay = moment();

// WHEN I open the planner the current day is displayed at the top of the calendar
$('#currentDay').text(currentDay.format('dddd, MMMM do'));

// saveBtn event
$('.saveBtn').on('click', (e) => {
    // LET hourClicked equal the buttons clicked sibling textarea's date-time.
    let hourClicked = $(e.target).siblings('textarea').data('time')
    // LET notesSaved equal the buttons clicked sibling textarea's value.
    let notesSaved = $(e.target).siblings('textarea').val()
    
    localStorage.setItem('hour' + hourClicked, notesSaved)
});

// localStorage
// FOR each schedule noted we are placing which text goes where it by a index from 9 to 17.
for (let notesIndex = 9; notesIndex <= 17; notesIndex++) {
    // LET 'savedSchedule' GET the values of specified key index.
    let savedSchedule = localStorage.getItem('hour' + notesIndex);
    $(`#hour${notesIndex}`).text(savedSchedule)
    
    // IF the text is null because there was nothing prev saved then the textarea is emptied.
    if ($(`#hour${notesIndex}`).text() == null) {
        $(`#hour${notesIndex}`).text().empty();
    }
    
}

// FOR each hour (military time) in the workday we are going to check if it matches the number in our textarea IDs.
for (let timeIndex = 9; timeIndex <= 17; timeIndex++) {
    // Our const currentTime is equal to the id 'hour' with the matching with the number of timeIndex.
    const currentTime = $(`#hour${timeIndex}`).data('time');

    // IF the data-time from our textarea IDs is less than the current hour...
    // THEN the past class is added and textarea is grey
    if (parseInt(currentDay.format('H')) > currentTime) {
        $(`#hour${timeIndex}`).addClass('past')
    }
    // IF the data-time from our textarea IDs is equal to the current hour...
    // THEN the present class is added and textarea is red
    else if (parseInt(currentDay.format('H')) == currentTime) {
        $(`#hour${timeIndex}`).addClass('present')
    }
    // IF the data-time from our textarea IDs is greater than the current hour...
    // THEN the future class is added and textarea is green
    else if (parseInt(currentDay.format('H')) < currentTime) {
        $(`#hour${timeIndex}`).addClass('future')
    }
}
